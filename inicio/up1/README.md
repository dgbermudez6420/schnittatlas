# FinishAtlas — página breve de upsell

Sitio estático en alemán, responsive, inspirado en SchnittAtlas. Sin framework ni dependencias de compilación. Integra el script de terceros oficial de Hotmart para el embudo; el tratamiento y las cookies de ese proveedor dependen de su servicio. No se añadieron rastreadores de marketing propios. La visualización del libro está hecha con CSS y la portada/muestras reales suministradas; se vende un PDF, no un libro físico.

## Archivos
- `index.html`: contenido, precio y espacio Hotmart.
- `assets/styles.css`: diseño y responsive.
- `assets/app.js`: ampliación de las muestras; no procesa pagos.
- `assets/*.webp`: portada y tres muestras.

## Hotmart: código oficial instalado
El snippet suministrado por el usuario está integrado debajo del precio, dentro de `#hotmart-slot`. Carga una sola vez `https://checkout.hotmart.com/lib/hotmart-checkout-elements.js` y ejecuta una sola vez `checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel')`.

- No hay botones manuales de sí/no ni formularios de pago inventados. Los controles y datos de la oferta pertenecen al widget de Hotmart.
- El contenedor ocupa el ancho disponible, sin altura fija, recortes ni `overflow:hidden`. La altura interna del iframe queda a cargo de Hotmart. Se elimina únicamente el ancho mínimo externo del iframe para no desbordar pantallas estrechas; no se recorta ni se oculta su contenido.
- No añadas otra copia del script, del ID `hotmart-sales-funnel` ni de la llamada `mount` al incrustar la página.
- El widget del embudo se muestra en el contexto del producto inicial/compra asociado. Abrir directamente el HTML o la URL privada no valida el formulario poscompra ni garantiza que aparezca una oferta.

### Configuración y prueba pendientes en Hotmart
1. Verifica que el producto inicial, oferta y embudo estén configurados y activos. Asocia esta página a la etapa correcta y configura las rutas de aceptar/rechazar y la entrega de FinishAtlas y ambos bonos.
2. Confirma que el precio del widget coincida con los `19,99 €` mostrados en la página, incluidos los impuestos y las condiciones reales.
3. Prueba el flujo desde la misma oferta configurada del producto inicial, con la sesión/contexto válido que proporciona Hotmart. La carga del script no equivale a una compra ni demuestra que el formulario poscompra funcione de extremo a extremo.
4. La publicación Sites sigue privada. Los clientes no podrán acceder hasta que el propietario autorice un destino accesible para ellos o un cambio de acceso. La inserción del código no cambia este permiso.
5. Añade los datos legales reales del vendedor y enlaces a Impressum, Datenschutz y condiciones antes del uso comercial. Revisa la información de privacidad y el tratamiento realizado por Hotmart; el sitio ya incorpora un script de tercero.

Verificación realizada: el script oficial cargó y creó un iframe real de Hotmart. Al abrir directamente la página sin una compra en curso, Hotmart mostró “There must be a purchase in progress to load this form.” Esta respuesta no valida una oferta activa ni el proceso de compra completo. No se realizó ninguna compra, cobro, aceptación/rechazo ni creación de una sesión ficticia para probar el código.

Referencias oficiales:
- https://suportehotmart.zendesk.com/hc/en-us/articles/220402348-What-is-a-Sales-Funnel-and-how-do-I-set-it-up
- https://suportehotmart.zendesk.com/hc/en-us/articles/43101499107597-How-to-set-up-an-Upsell-using-the-Sales-Funnel-and-Hotmart-Pages

## Barra superior y progreso
La franja roja pide terminar este paso. El 80 % es un indicador visual fijo del paso del embudo, no un estado técnico del widget de Hotmart ni una carga de acceso. No se simulan descargas, temporizadores, compras ni acceso.

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
