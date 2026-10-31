# SchnittAtlas — página de gracias

Página estática en alemán para el final del embudo SchnittAtlas / FinishAtlas. Diseño marfil, burdeos y dorado coherente con las páginas anteriores. No modifica el upsell ni el downsell. Sin frameworks, librerías externas, cookies, analítica ni scripts de Hotmart.

## Contenido
Los tres pasos siguen la página de gracias anterior elegida por el usuario:
1. Revisar el correo de Hotmart, incluido spam/promociones.
2. Configurar la contraseña mediante el enlace de ese correo; si la persona ya tiene cuenta, iniciar sesión con sus datos existentes.
3. Iniciar sesión y descargar los materiales comprados para usarlos sin conexión.

Soporte verificado: **academiadigital3010@gmail.com**. Está visible, enlazado con `mailto:` y se puede copiar mediante un botón en contextos seguros compatibles. Sin JavaScript o sin permiso para el portapapeles, el correo sigue disponible.

Referencia comprobada: https://guidavisuale.educatedigital.de/thanks/ y entregas anteriores de Método BASE y pastelería. No se copiaron garantías, plazos de respuesta ni promesas específicas de productos diferentes.

## Importante para el embudo
- Página universal: no promete FinishAtlas ni bonos a quien no los haya comprado. El acceso corresponde a los materiales de la compra.
- No valida pagos ni autentica al visitante. El texto indica que el correo llega cuando se confirma el pago. No simula un pago confirmado, un progreso de acceso al 100 %, una descarga ni una redirección.
- No incluye enlaces de acceso inventados; utiliza el enlace seguro que Hotmart envía al comprador.
- No lleva widget de upsell, botones de compra ni ofertas adicionales.
- La URL de Sites se mantiene privada. Para usarla con clientes, el propietario debe autorizar un destino accesible o un cambio de acceso. La creación no modifica esos permisos.
- La página aún no está conectada al redireccionamiento final del embudo de Hotmart. Configurar ese destino y probar el flujo real desde Hotmart antes de utilizarla comercialmente.
- Añadir, cuando corresponda, los datos legales reales y enlaces de Impressum/Datenschutz del vendedor antes del uso comercial. No se inventaron esos datos.

## Archivos y uso
- `dist/index.html`
- `dist/assets/styles.css`
- `dist/assets/app.js`
- `dist/assets/favicon.svg`

Sube el contenido de `dist/` a cualquier hosting estático, con `index.html` junto a `assets/`. No requiere compilación. El ZIP portátil contiene estos archivos en la raíz, además de este README.

## Verificación realizada
- HTML: idioma alemán, un H1, 3 pasos, IDs únicos y referencias locales completas.
- JavaScript: `node --check` correcto.
- Navegador: inspección visual de escritorio y marcos responsive de 390 y 320 px (anchos útiles de 375/305 px por las barras de desplazamiento), sin desbordamiento horizontal. No se utilizó emulación de dispositivos: DevTools no está disponible en este entorno.
- Soporte: destino `mailto:` comprobado; el botón copia la dirección exacta, verificada mediante pegado sin enviar mensaje ni navegar.
- No se realizó compra, cobro, envío de correo ni prueba de acceso con credenciales. La conexión final en Hotmart queda pendiente.
