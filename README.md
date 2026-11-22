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
