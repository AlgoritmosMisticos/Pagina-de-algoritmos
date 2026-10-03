Pagina web con GitHub pages https://algoritmosmisticos.github.io/Pagina-de-algoritmos/

# Visualizador Interactivo de Algoritmos de Ordenamiento

## Integrantes
* **Andrea Valeria Torres Figueroa**
* **Estefania Navarro Mendoza**
* **Octavio Emmanuel López Ortiz**

## Descripción
Los algoritmos de ordenamiento son uno de los bloques fundamentales en la ciencia de la computación y la ingeniería de software. El análisis de su comportamiento dinámico y la evaluación de su complejidad algorítmica ($O(n^2)$, $O(n \log n)$) resultan indispensables para comprender la eficiencia computacional al procesar estructuras de datos.

Este proyecto consiste en el desarrollo e implementación de una herramienta web interactiva basada en el archivo monolítico `ALGORITMOS.html`. Dicha aplicación permite visualizar paso a paso y en tiempo real el proceso de ordenamiento de arreglos numéricos mediante barras dinámicas, facilitando el análisis conceptual, la comparación de rendimiento y el estudio didáctico del comportamiento interno de cada algoritmo.

## Objetivo

### Objetivo General
Construir un visualizador dinámico e interactivo mediante tecnologías web (HTML5, Tailwind CSS y JavaScript) que permita ejecutar, pausar y analizar visualmente el comportamiento de múltiples algoritmos de ordenamiento.

### Objetivos Específicos
1. **Diseño de Interfaz (UI/UX):** Crear una interfaz intuitiva, estética y completamente *responsive* con paneles de control para parametrizar el tamaño de los datos y la velocidad de ejecución.
2. **Representación Gráfica:** Implementar una visualización por barras en la que se resalten en tiempo real las comparaciones, intercambios de elementos e índices ya ordenados.
3. **Optimización y Refactorización:** Optimizar la lógica de ejecución del código JavaScript para garantizar animaciones fluidas y evitar el congelamiento del hilo principal del navegador durante las iteraciones.

## Algoritmos implementados
La aplicación permite evaluar e inspeccionar el comportamiento de algoritmos representativos de distintas complejidades:

* **Algoritmos cuadráticos $O(n^2)$:** *(Ej. Búsqueda/Ordenamiento por Burbuja - Bubble Sort, Selección - Selection Sort, Inserción - Insertion Sort)*.
* **Algoritmos logarítmicos $O(n \log n)$:** *(Ej. Quick Sort, Merge Sort)*.

## Tecnologías utilizadas
El proyecto utiliza una arquitectura cliente de tipo monolítico estructurado en el archivo `ALGORITMOS.html`, apoyándose en las siguientes tecnologías:

* **HTML5:** Estructuración semántica de la aplicación (encabezado, paneles de control, área de métricas y lienzo de representación gráfica).
* **Tailwind CSS (vía CDN):** Maquetación moderna basada en clases de utilidad que garantizan flexibilidad, diseño higiénico y adaptabilidad *responsive*.
* **FontAwesome (Incrustado):** Estilos vectoriales incrustados en el encabezado para proveer iconografía interactiva en botones de control (reproducción, pausa, mezcla y reinicio) sin depender de peticiones externas.
* **JavaScript ES6+ (Motor de simulación):** Lógica encargada de generar arreglos aleatorios, controlar el flujo asíncrono mediante `async/await` y actualizar los estados de comparación e intercambio.

## Cómo ejecutar el proyecto

Al ser un proyecto del lado del cliente sin dependencias de backend ni gestores de paquetes, ejecutarlo es muy sencillo:
https://algoritmosmisticos.github.io/Pagina-de-algoritmos/

## Uso de la aplicación
La interfaz de la aplicación cuenta con los siguientes módulos de interacción:
* **Panel de Control de Datos e Interacción:**
        **Generación de Arreglo:** Botón para generar arreglos de datos aleatorios.
        **Tamaño de Datos:** Deslizador (slider) para ajustar la cantidad de barras a ordenar.
        **Velocidad de Simulación:** Control deslizante para regular la rapidez del ordenamiento.
        **Controles de Ejecución:** Botones interactivos para Iniciar, Pausar y Reiniciar la simulación.
**Métricas en Tiempo Real:**
Contador de comparaciones entre elementos.
Contador de intercambios (swaps) ejecutados.
Contador de tiempo transcurrido de ejecución.

**Código de Colores e Indicadores Visuales:**
Estado por defecto: Color neutro de las barras.
Comparación activa: Color resaltado para las barras que se están evaluando en la iteración actual.
Intercambio: Coloración diferenciada para señalar la permuta de posiciones.
Elemento ordenado: Indicador visual que confirma que el elemento ya está en su posición final.

