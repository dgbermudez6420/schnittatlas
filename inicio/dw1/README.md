# FinishAtlas — downsell independiente de 10,00 €

Página estática en alemán, responsive, con el mismo estilo visual y la misma oferta completa del upsell: FinishAtlas + FinishPlan + SalonFoto. Es un proyecto y Site nuevos; no reemplaza ni modifica el upsell de 19,99 € ni la página principal de SchnittAtlas.

## Publicar en cualquier hosting estático
Sube el contenido de `dist/`, conservando `index.html` junto a la carpeta `assets/`. No necesita compilación ni dependencias. El ZIP de entrega contiene ese contenido en la raíz y este README. Las imágenes y estilos son locales. La versión de entrega integra el script oficial de terceros de Hotmart; su tratamiento de datos y cookies depende del proveedor. No se añadieron rastreadores de marketing propios. Los controles de pago pertenecen al widget de Hotmart, no a un formulario inventado en la página.

## Mensaje y precio
- Precio mostrado: **10,00 €**, pago único, sin suscripción. No afirma que los impuestos estén incluidos ni inventa condiciones fiscales.
- Referencia transparente al **ofrecimiento anterior de 19,99 €**; no se presenta como un precio de mercado o descuento histórico inventado.
- Argumento: el precio no debe impedir usar este recurso. La oferta conserva íntegros el producto principal y ambos bonos. No hay urgencia, testimonios ni escasez inventados.
- El progreso fijo del **90 %** señala esta etapa del embudo. No simula una descarga, una carga de acceso o el estado técnico de Hotmart.

## Hotmart: código del usuario integrado
El snippet proporcionado expresamente para este downsell está instalado dentro de `#hotmart-downsell-slot`, debajo del precio. Carga una sola vez `https://checkout.hotmart.com/lib/hotmart-checkout-elements.js` y ejecuta una sola vez `checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel')`.

- No hay botones manuales duplicados de aceptar/rechazar ni formularios de pago inventados.
- El contenedor usa todo el ancho disponible, sin altura fija ni recortes. En móvil, el widget puede usar el ancho de la pantalla. La altura interna del iframe la controla Hotmart.
- Al incrustar este HTML, no añadir otra copia del script, del ID `hotmart-sales-funnel` ni de la llamada `mount`.
- La carga del SDK o la aparición del iframe no demuestra una compra ni la validación completa del flujo poscompra. La oferta depende del contexto real de Hotmart.

### Configuración y prueba pendientes en Hotmart
1. Confirmar que esta página corresponda a la etapa de **downsell de 10,00 €**, no al upsell de 19,99 €. El snippet genérico no especifica por sí solo el producto, el importe ni las rutas del embudo.
2. Configurar y verificar la entrega de **FinishAtlas, FinishPlan y SalonFoto**, sin retirar contenido ni bonos. Los PDFs no se exponen dentro de la web.
3. Probar desde el producto inicial y su embudo real con el contexto de compra válido. No se ha realizado ningún cobro, compra ni aceptación/rechazo de una oferta durante esta implementación.
4. Confirmar que el precio y las condiciones reales de Hotmart coincidan con los **10,00 €** anunciados. La página no inventa afirmaciones fiscales.
5. Añadir los datos legales reales del vendedor y enlaces a Impressum, Datenschutz y condiciones antes del uso comercial. Revisar también la privacidad y el tratamiento realizado por Hotmart.

El Site está publicado con acceso **privado al propietario**. No se cambió el acceso. Para clientes hace falta un destino autorizado accesible o un cambio explícito de acceso. La página puede entregarse como ZIP a otro hosting sin el manifiesto privado de Sites.

## Diseño y contenido conservados
- Portada principal sin cantidad de páginas. No se muestra el número de páginas del producto principal en la web.
- Mockups de los tres productos con las portadas suministradas: FinishAtlas, FinishPlan y SalonFoto.
- Tres muestras ilustrativas completas y grandes en la propia página: 2 columnas en escritorio, 1 en móvil; sin recortes. Ampliación opcional con diálogo, botón de cierre, Escape y retorno de foco.
- Oferta completa: 12 protocolos, 6 adaptaciones, preparación/errores/cuidado y ambos bonos. No se removió ningún componente de la oferta.
- Sin formularios de pago inventados, sin botones manuales de sí/no, sin trackers de marketing propios.

## Archivos
- `dist/index.html`: texto alemán, precio y widget Hotmart del downsell.
- `dist/assets/styles.css`: diseño y responsive.
- `dist/assets/app.js`: ampliación de muestras; no procesa pagos.
- `dist/assets/*.webp`: portada principal sin conteo, portadas de los bonos y tres muestras.

## Verificación realizada
- Sintaxis JavaScript: `node --check dist/assets/app.js` — pasó.
- HTML y assets: idioma alemán, precio 10,00 €, indicador 90 %, IDs únicos, enlaces internos y todos los archivos locales; tres muestras y ambos bonos presentes; sin formularios ni botones manuales de compra.
- Navegador: diseños a 320, 390, 768 y 1180 px sin desbordamiento horizontal. Muestras completas en 2 columnas de escritorio / 1 columna móvil; imágenes cargadas, proporción original y `object-fit: contain`.
- Ampliación de muestras: apertura, cierre por Escape y botón, retorno de foco al botón original. FAQ: expansión y cierre comprobados.
- SDK Hotmart: se cargó una sola vez y creó un solo iframe. En acceso directo, el proveedor mostró “There must be a purchase in progress to load this form.”, coherente con la falta de contexto de compra; no se intentó fabricarlo ni realizar un pago.
- Responsive del widget verificado: 320 / 390 / 768 / 1180 px sin desbordamiento horizontal; iframe de 305 / 375 / 480 / 490 px respectivamente, sin recorte por el contenedor. Vista previa de muestras y cierre Escape siguen funcionando.
- No probado: pago/entrega real de Hotmart. El código suministrado está integrado, pero esta página privada abierta directamente no aporta el contexto de compra del embudo.
