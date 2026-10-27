// Proxy CORS para Project Gutenberg (Cloudflare Worker)
// Uso: https://TU-WORKER.workers.dev/?url=https://gutenberg.pglaf.org/cache/epub/1342/pg1342.txt

const PERMITIDOS = [
  'www.gutenberg.org',
  'gutenberg.org',
  'gutenberg.pglaf.org',
  'aleph.gutenberg.org',
];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Max-Age': '86400',
};

const err = (msg, status) =>
  new Response(msg, { status, headers: { ...CORS, 'Content-Type': 'text/plain; charset=utf-8' } });

export default {
  async fetch(request) {
    // 1. Preflight
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (request.method !== 'GET' && request.method !== 'HEAD') return err('Método no permitido', 405);

    // 2. Dirección pedida
    let destino;
    try {
      destino = new URL(new URL(request.url).searchParams.get('url'));
    } catch {
      return err('Falta el parámetro ?url= o no es una dirección válida', 400);
    }

    // 3. Seguridad: solo https y solo dominios de Gutenberg
    if (destino.protocol !== 'https:' || !PERMITIDOS.includes(destino.hostname)) {
      return err('Dominio no permitido', 403);
    }

    // 4. Descarga (sigue redirecciones: ebooks/1342.txt.utf-8 -> cache/epub/1342/pg1342.txt)
    let origen;
    try {
      origen = await fetch(destino.toString(), {
        redirect: 'follow',
        headers: { 'User-Agent': 'AlgoritmosMisticos/1.0' },
      });
    } catch {
      return err('No se pudo conectar con Gutenberg', 502);
    }
    // Que la redirección no nos saque de la lista permitida
    if (origen.url && !PERMITIDOS.includes(new URL(origen.url).hostname)) {
      return err('Redirección a dominio no permitido', 403);
    }
    if (!origen.ok) return err('Gutenberg respondió ' + origen.status, origen.status);

    // 5. Respuesta con CORS, sin cargar todo el libro en memoria
    return new Response(origen.body, {
      status: 200,
      headers: {
        ...CORS,
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  },
};
