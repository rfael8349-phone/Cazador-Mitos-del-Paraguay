# Sistema de armas, emboscadas y mejoras — v0.3

Diseño de juego para CAZADOR: MITOS DEL PARAGUAY. Documento de alcance; no implica que las mecánicas estén ya implementadas.

## Principios
- Combate legible en pantalla horizontal y manejable con los controles táctiles actuales.
- El jugador conserva la decisión de atacar: una alerta del perro puede preparar/desenfundar el arma, pero nunca dispara por sí sola.
- Armas y mejoras tienen identidad folclórica paraguaya y progresión equilibrada.
- La munición es limitada, pero quedarse sin balas nunca bloquea la partida: siempre hay una alternativa cuerpo a cuerpo.

## Familias de armas
1. **Armas de fuego:** opciones de alcance con munición limitada, recarga visible y diferencias de cadencia/daño. Mantener pocas variantes al principio para que cada una tenga función clara.
2. **Machete y armas cortantes:** ataques horizontales, diagonales y descendentes con giro de torso, anticipación, impacto y recuperación. Mejoras de alcance, equilibrio, resistencia y daño.
3. **Armas contundentes y pelea sin armas:** puñetazo, empujón o golpe de emergencia cuando no hay arma equipada. Menor alcance, útil para zafarse y recuperar espacio.
4. **Arreador o rebenque:** herramienta de alcance corto-medio para mantener distancia, interrumpir o hacer retroceder enemigos ligeros; no debe sustituir al machete ni ser un arma dominante.

## Emboscadas y alerta del perro
- Un evento de emboscada puede activar enemigos desde puntos de aparición predefinidos y fuera del campo visual, evitando apariciones injustas encima del jugador.
- El perro detecta señales (olor, sonido, movimiento) y cambia de FOLLOW a ALERT: orejas erguidas, pausa, mirada hacia la amenaza y gruñido progresivo.
- Si el peligro se confirma, el cazador desenfunda automáticamente el arma equipada y adopta postura de combate.
- El personaje queda preparado, pero espera la orden del jugador para atacar.
- Señales visuales y sonoras deben avisar de la dirección aproximada sin revelar siempre la posición exacta.
- Tras la emboscada, perro y cazador regresan gradualmente a sus estados normales.

## Munición y transición cuerpo a cuerpo
- HUD muestra munición actual y reserva.
- Al llegar a cero, el arma de fuego hace una señal clara de cargador vacío y deja de disparar; no consume entradas de forma silenciosa.
- El jugador puede cambiar al arma secundaria o al machete con un botón contextual sencillo.
- Si no tiene arma equipada, usa puños y empujón defensivo.
- Recargar requiere una pausa breve y una reserva disponible; nunca se recarga automáticamente durante una animación de ataque.
- Los controles actuales se conservan; añadir selector/cambio de arma sin ocultar disparo, salto o movimiento en móviles pequeños.

## Mejoras y bendiciones
Las mejoras se consiguen explorando, completando encuentros o encontrando lugares/personajes del mundo. Propuesta inicial:
- **Machete templado:** aumenta durabilidad y mejora el impacto.
- **Filo equilibrado:** acelera ligeramente la recuperación sin volver instantáneo el golpe.
- **Bendición protectora:** reduce una parte del daño recibido o protege una vez por encuentro, con límite claro.
- **Bendición del monte:** permite percibir rastros o amenazas cercanas durante un tiempo.
- **Amuleto de puntería:** mejora estabilidad/precisión del arma de fuego, sin eliminar la gestión de munición.

Las bendiciones deben tener explicación narrativa y visual propia; no convertir objetos sagrados o tradiciones reales en adornos genéricos. Se pueden presentar como elementos ficticios del universo del juego, con respeto cultural.

## Interfaz y accesibilidad
- Botón de ataque contextual según arma equipada.
- Indicador visible del arma actual y munición.
- Cambio de arma accesible con un único toque, sin combinaciones difíciles.
- Señal distinta para perro alerta, emboscada y munición agotada.
- Pruebas obligatorias en iPhone/Android en horizontal, con zonas seguras y botón de reinicio funcionando.

## Orden de implementación
1. Inventario/equipamiento mínimo y selector de arma.
2. Machete con animación por fases y combate sin armas.
3. Munición, recarga y transición a cuerpo a cuerpo.
4. Reacciones del perro y secuencia de emboscada.
5. Rebenque, mejoras y bendiciones.
6. Balance, efectos audiovisuales y pruebas en dispositivos.

## Fuera del primer prototipo
No implementar todavía árboles enormes de habilidades, decenas de armas ni IA remota. Primero asegurar que el ciclo alerta → preparación → decisión del jugador → combate → recuperación sea divertido y fiable.
