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


## Estado del desarrollo — v0.2 (rama de trabajo)

Esta rama añade un primer pase de atmósfera cinematográfica a la introducción:
- Bandas de cine y viñeta para reforzar el encuadre.
- Capas de niebla animada y partículas ambientales.
- Variaciones de luz en escenas de amanecer y despertar.
- Temblor de cámara breve en la secuencia de ataque.
- Grano sutil para un acabado menos plano.

### Pendiente antes de considerar el juego completo
1. Sustituir las figuras provisionales por sprites originales finales del cazador, perro, Ao Ao y jefe.
2. Crear animaciones completas (reposo, carrera, salto, daño, ataque y muerte).
3. Añadir fondos por capas y escenarios diferenciados para cada nivel.
4. Completar campaña, jefes, checkpoints, menús, pausa, opciones y guardado de progreso.
5. Probar rendimiento y controles en iPhone, Android y tablets.

La rama `release/v0.2-visual-polish` es una versión de trabajo; no se presenta como lanzamiento final.
