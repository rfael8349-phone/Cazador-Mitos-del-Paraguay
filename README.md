# Cazador: Mitos del Paraguay

Aventura de acción y plataformas 2D inspirada en los juegos de 16 bits y en el folklore paraguayo.

## Primera versión jugable
- HTML5 + JavaScript + Phaser 3 (se ejecuta en el navegador).
- Controles de teclado y controles táctiles para móvil.
- Protagonista cazador, perro compañero y primer espíritu del monte.
- Escenario inicial: bosque nocturno.

## Probar
Abre `index.html` en un servidor web o publica el repositorio con GitHub Pages.

## Publicar con GitHub Pages
En GitHub: **Settings → Pages → Deploy from a branch → main → / (root) → Save**. Cuando termine el despliegue, la dirección será:
`https://rfael8349-phone.github.io/Cazador-Mitos-del-Paraguay/`

## Próximas etapas
1. Incorporar sprites originales basados en las referencias del cazador y el perro.
2. Mejorar físicas, animaciones, combate y sonido.
3. Diseñar niveles y jefes inspirados en el folklore paraguayo.
4. Preparar la instalación como aplicación móvil con Capacitor.

Esta es una primera base de juego, no la versión final de los 30 niveles.

## Nivel 1 — generador procedural (primera fase)
- Recorrido de aproximadamente 200 segundos a velocidad continua de referencia.
- Suelo continuo y cámara lateral que sigue al protagonista.
- Tramos con distribución pseudoaleatoria de Ao Ao, plataformas y munición.
- Disparo con J o botón ✦; salto con Espacio o botón ⬆.
- Enemigos con resistencia, drops de munición y jefe final Ao Ao Mayor.
- El tiempo y la distancia activan el encuentro final; el ritmo real depende de cuánto avance el jugador.


## v0.3 — combate y compañero (rama de desarrollo)

Implementación inicial añadida en `index.html`:
- Ciclo de armas: escopeta, machete, arreador y puños; el selector evita equipar el arma de fuego si no queda munición.
- En las emboscadas el arriero prepara automáticamente el arma disponible, pero el jugador conserva la decisión de atacar.
- El machete tiene una secuencia de preparación, barrido curvo y recuperación; el arreador y los puños conservan alcances y tiempos distintos.
- Tres altares de bendición opcionales mejoran progresivamente el daño del machete.
- El perro ya detecta amenazas cercanas, cambia a alerta/guardia y puede intervenir contra enemigos próximos.

**Estado:** cambios guardados en `feature/dog-companion-ai-v0.3`. Se ha comprobado el análisis sintáctico del JavaScript embebido; todavía falta una prueba de juego real en navegador y móvil. No integrar en `main` hasta validar controles, colisiones y equilibrio.

## Corrección de renderizado y arte móvil — 22/11/2026

- El fondo del bosque se dibuja ahora en segmentos de 1920 px, en lugar de una única superficie de 38.000 px que podía superar los límites gráficos de algunos móviles.
- Se han rediseñado los SVG del arriero, el perro y el Ao Ao con más volumen, sombreado y detalles.
- Se añadió movimiento sutil de respiración al protagonista y movimiento corporal al perro.
- Se comprobó la sintaxis del JavaScript principal y de la secuencia introductoria.
- GitHub Pages ha completado la compilación; el despliegue se está terminando.

**Limitación actual:** son ilustraciones vectoriales y movimiento procedural; todavía no son animaciones rotoscopiadas cuadro a cuadro ni sprites de producción. Hace falta probar la escena en un móvil real para confirmar rendimiento, colisiones y controles.


## Optimización móvil y ambiente visual — 22/11/2026

- El suelo físico se divide en tramos de 1.024 px en lugar de cientos de cuerpos pequeños.
- Los encuentros, plataformas y suministros se generan progresivamente cerca del jugador; ya no se instancian todos al iniciar el nivel.
- Se añadieron luciérnagas animadas y una capa ambiental tenue con coste gráfico reducido.
- Se comprobó la sintaxis JavaScript del juego tras los cambios.
- Pendiente: prueba de ejecución real en Safari/iPhone y Android; la compilación/publicación de Pages debe terminar antes de validar el enlace actualizado.
