# FinishAtlas — página breve de upsell

Sitio estático en alemán, responsive, inspirado en SchnittAtlas. Sin dependencias, cookies ni rastreadores. La visualización del libro está hecha con CSS y la portada/muestras reales suministradas; se vende un PDF, no un libro físico.

## Archivos
- `index.html`: contenido, precio y espacio Hotmart.
- `assets/styles.css`: diseño y responsive.
- `assets/app.js`: ampliación de las muestras; no procesa pagos.
- `assets/*.webp`: portada y tres muestras.

## Conectar Hotmart (pendiente)
1. Busca `HOTMART — PEGAR AQUÍ` en `index.html`.
2. Sustituye el contenido de `#hotmart-slot` por el snippet oficial del upsell de este producto. No hay botones manuales de sí/no: el snippet oficial ya incluye ambos botones.
3. Configura aceptación, rechazo y entrega dentro del embudo de Hotmart. No hay un enlace de compra ni una redirección inventada.
4. Retira la clase `hotmart-slot` si no quieres el borde de maqueta. Retira las notas de vista previa únicamente después de conectar y probar la integración.
5. Confirma el precio editable `19,99 €`, impuestos/importe final, modalidad de pago y las condiciones antes de vender. No se han añadido descuentos, garantía ni testimonios inventados.
6. Añade los datos legales reales del vendedor y los enlaces reales a Impressum, Datenschutz y condiciones. Ajusta las obligaciones legales con el asesor correspondiente.
7. Prueba el flujo completo (sí, no, pago y acceso) con las herramientas oficiales de prueba de Hotmart antes de publicar comercialmente.

## Barra superior y progreso
La franja roja pide terminar este paso. El 80 % es un indicador visual fijo del paso del embudo, no una conexión a Hotmart ni una carga de acceso. No se simulan descargas, temporizadores, compras ni acceso.

## Contenido
- FinishAtlas: 32 páginas PDF (30 de contenido + portada + índice). Desglose: 4 preparación, 12 protocolos de acabado, 6 adaptaciones, 4 errores y 4 cuidado en casa.
- FinishPlan: bono incluido de regalo, 6 páginas (portada + 5 formularios imprimibles para documentar el acabado).
- SalonFoto: bono incluido de regalo, 6 páginas (portada + 5 guías visuales para fotografiar el acabado con el teléfono).
- Stacking: 3 PDFs y 2 bonos de regalo. La página no muestra cantidades de páginas por petición del usuario. Precio mostrado sin cambio: 19,99 €. Sin precios de referencia ni descuentos inventados.
- Las tres muestras del FinishAtlas se muestran completas y grandes en la propia página: dos columnas en escritorio y una por fila en móvil, sin recortar. El zoom es opcional. Son vistas previas ilustrativas. Las portadas de los bonos son las reales. El mockup principal usa una variante de la portada creada para la web sin la línea “30 Praxis-Seiten”; el PDF original no se modifica.
- Los archivos PDF no se alojan públicamente dentro de la página: deben configurarse en la entrega de Hotmart junto con el producto principal.

## Publicar en cualquier hosting estático
Sube los archivos de este ZIP manteniendo `index.html` junto a la carpeta `assets/`. También funciona abriendo `index.html` localmente. No requiere compilación.

La versión Sites se mantiene privada; no sustituye ni modifica la página principal de SchnittAtlas.
