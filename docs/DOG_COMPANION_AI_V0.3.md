# Compañero canino — diseño de IA v0.3

Esta rama parte de `main` y mantiene intactos los controles móviles y el flujo de reinicio.

## Objetivo
Convertir al perro en un compañero autónomo con rutinas contextuales, percepción del entorno, inventario de objetos y respuesta defensiva. La IA será determinista y ligera para funcionar en móviles; no necesita un servicio de IA remoto.

## Estados de comportamiento
- `FOLLOW`: acompaña al cazador manteniendo una distancia cómoda y evitando teletransportes bruscos.
- `IDLE`: descansa, se sienta, se tumba o se rasca cuando el jugador está quieto y el entorno es seguro.
- `SNIFF`: examina puntos de interés, huellas, objetos y restos cercanos.
- `MARK`: marca territorio en puntos adecuados, con animación breve y sin bloquear el avance.
- `DIG`: escarba en tierra blanda para descubrir o enterrar objetos; requiere un punto válido.
- `FETCH`: recoge palos, huesos y restos pequeños, los transporta en la boca y los entrega o suelta.
- `ALERT`: detecta una presencia desconocida, orienta orejas/cabeza y gruñe si la amenaza se aproxima.
- `GUARD`: se interpone cerca del cazador, ladra y mantiene distancia ante una amenaza.
- `RETURN`: vuelve al cazador cuando se aleja demasiado o termina la amenaza.

## Percepción y prioridades
1. Amenaza que está atacando al cazador.
2. Amenaza cercana que el perro no reconoce.
3. Orden explícita del jugador (seguir, buscar, traer, quedarse).
4. Objeto de interés cercano.
5. Necesidades y rutinas ambientales.
6. Seguir al cazador.

La percepción usa radios de proximidad, línea de visión sencilla y memoria temporal de entidades conocidas. No se debe atacar automáticamente a todo lo desconocido: primero alerta y advierte; la defensa se activa si el peligro se acerca o agrede.

## Objetos
Cada objeto tendrá tipo, peso/clase, estado y si puede transportarse. El perro solo podrá llevar un objeto a la vez. Los restos grandes se olfatean, no se cargan. Los objetos de misión no se consumen ni se entierran.

## Animación y sonido
Cada estado tendrá animaciones separadas: caminar, trotar, olfatear, sentarse, tumbarse, escarbar, levantar pata, recoger/soltar, gruñir, ladrar y volver a guardia. Sonidos ambientales discretos y con enfriamiento para evitar repeticiones. Las animaciones deben poder sustituirse por sprites dibujados/rotoscopiados sin reescribir la lógica.

## Reglas para móvil y rendimiento
- Sin llamadas de red ni modelos remotos.
- Actualizar decisiones a intervalos (no cada frame).
- Limitar detección a entidades cercanas a la cámara.
- Mantener el perro dentro de los límites del nivel y evitar que tape los controles/HUD.
- Reiniciar estados, temporizadores y objetos temporales al reiniciar la partida.
- No modificar la entrada táctil, orientación horizontal, HUD ni botón de reinicio.

## Fases de implementación
1. Máquina de estados y seguimiento autónomo.
2. Olfateo, alerta, gruñido y defensa.
3. Recoger/soltar objetos.
4. Escarbar y marcar territorio con puntos válidos.
5. Animaciones, efectos de sonido y pruebas de rendimiento.

Este documento describe el alcance; no afirma que los comportamientos estén ya implementados en el juego.
