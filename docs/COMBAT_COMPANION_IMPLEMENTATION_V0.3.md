# Prototipo jugable de combate y compañero — v0.3

Esta rama contiene una primera implementación en `index.html`, todavía pendiente de pruebas en dispositivos reales.

## Implementado en el prototipo
- Selector táctil de cuatro estilos: escopeta (arma de fuego simplificada), machete, arreador/rebenque y puños.
- Botón de ataque contextual: dispara con el arma de fuego y ejecuta un golpe cuerpo a cuerpo con las demás.
- Munición limitada; al agotarse, el ataque cambia al machete y muestra un aviso. No se bloquea el avance.
- Golpes cuerpo a cuerpo con enfriamiento, alcance y daño diferenciados. El machete tiene mayor daño; el rebenque tiene mayor alcance y empuje; los puños sirven como recurso de emergencia.
- Efecto de arco de ataque y rotación breve del cuerpo como placeholder de animación.
- El perro detecta enemigos cercanos, cambia entre seguimiento, olfateo, alerta y guardia, muestra una señal visual y se acerca para interrumpir enemigos próximos.
- Alerta del perro prepara al jugador y avisa; nunca dispara por cuenta propia.
- Encuentros de emboscada en puntos del recorrido, con enemigos que aparecen por delante del jugador.
- Restos óseos aparecen al derrotar enemigos; el perro puede acercarse a olfatearlos/recogerlos en su rutina de exploración.
- El daño cuerpo a cuerpo también puede derrotar al jefe.

## Pendiente antes de considerar estable
- Sustituir las figuras provisionales por sprites originales de calidad y animaciones por fotogramas/rotoscopia.
- Animaciones completas de recoger y transportar objetos, escarbar, marcar territorio y sonidos reales del perro.
- Armas dibujadas individualmente, recarga, reserva de munición, inventario persistente y mejoras/bendiciones con interfaz.
- Animaciones del rebenque y puños más completas; sistema de combo y defensa.
- Balance de emboscadas y pruebas de rendimiento/colisiones.
- Pruebas en Safari iPhone, Android y tablet en orientación horizontal.

## Prueba y seguridad
La implementación se ha guardado en la rama `feature/dog-companion-ai-v0.3`, separada de `main`. No se ha fusionado ni publicado como versión estable. Antes de fusionar hay que probar los controles táctiles, el botón de cambio de arma, los estados del perro, el reinicio tras morir y el jefe en dispositivos reales.
