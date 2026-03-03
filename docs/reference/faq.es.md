# FAQ

## General

??? question "¿Se almacenan mis datos en algún servidor externo?"
    No. Todo se ejecuta localmente en su servidor. Los datos de su CV se almacenan en un archivo de base de datos SQLite en el directorio `/data`.

??? question "¿Puedo ejecutar CV Manager sin Docker?"
    Sí. Instale Node.js 18+, ejecute `npm install` en el directorio del proyecto y luego `node src/server.js`. La interfaz de administración se ejecuta en el puerto 3000 y el sitio público en el puerto 3001.

??? question "¿Pueden varias personas usar la misma instancia?"
    CV Manager está diseñado como una aplicación para un solo usuario. Cada instancia gestiona el CV de una persona. Para varias personas, ejecute contenedores separados.

## Edición

??? question "¿Cómo marco una posición como 'actual'?"
    Deje vacío el campo **Fecha de fin**. Se mostrará como "Presente" en el CV.

??? question "¿Puedo reordenar los elementos dentro de una sección?"
    Sí. La mayoría de los elementos admiten reordenamiento mediante arrastrar y soltar. El orden se guarda automáticamente.

??? question "¿Cómo agrego viñetas a una experiencia?"
    Edite la experiencia e introduzca los puntos destacados en el campo **Highlights** — una viñeta por línea.

??? question "¿Cómo agrego el logotipo de una empresa?"
    Edite la experiencia, desplácese hasta la sección **Company Logo** y haga clic en **Choose image** para cargar una imagen. También puede hacer clic en **Use existing** para reutilizar un logotipo que ya haya cargado. Active la opción **"Sync logo across all [Company]"** para aplicar el mismo logotipo a todas las experiencias en esa empresa.

??? question "Eliminé algo por accidente. ¿Puedo deshacerlo?"
    No existe una función de deshacer. Dado que las ediciones se guardan automáticamente en el dataset activo, el cambio se conserva de inmediato. Si dispone de una exportación anterior o de un dataset guardado por separado, puede restaurar desde ahí. Es una buena práctica exportar su CV regularmente como respaldo.

## Secciones personalizadas

??? question "¿Cuántas secciones personalizadas puedo crear?"
    No existe un límite estricto. Cree tantas como necesite.

??? question "¿Puedo cambiar el tipo de diseño de una sección personalizada después de crearla?"
    Sí. Edite la sección y seleccione un diseño diferente. Tenga en cuenta que algunos campos pueden no transferirse entre tipos de diseño (por ejemplo, al cambiar de cards a social links).

??? question "¿Cuál es la diferencia entre los diseños 'Bullet Points' y 'Free Text'?"
    **Bullet Points** muestra cada línea como un elemento de lista con viñeta con un título de grupo. **Free Text** muestra texto sin formato con saltos de línea preservados y sin título — similar a la sección About/Bio.

## Impresión y PDF

??? question "¿Por qué mi PDF se ve diferente a la pantalla?"
    La salida de impresión utiliza estilos de impresión dedicados, optimizados para papel. Algunos efectos visuales (estados hover, animaciones, degradados) se simplifican. Los elementos ocultos y los controles de administración se eliminan automáticamente.

??? question "¿Cómo hago para que mi CV ocupe menos páginas?"
    Intente activar **Allow Section Splits** y **Allow Item Splits** en la configuración de Print & Export. También puede ocultar elementos o secciones menos importantes, o utilizar diseños de secciones personalizadas más compactos. Asimismo, puede escalar la impresión a través del cuadro de diálogo de impresión de cualquier navegador (a veces un poco oculto).

??? question "¿Por qué faltan algunos elementos en mi CV impreso?"
    Verifique si esos elementos se han marcado como ocultos (icono del ojo). Los elementos ocultos se excluyen de la salida de impresión y de la vista pública.

??? question "¿Los números de página no aparecen?"
    Asegúrese de que **Page Numbers** esté activado en Settings → Print & Export. Algunos visores de PDF del navegador pueden no mostrar los números de página generados por CSS — intente descargar el PDF y abrirlo en un lector dedicado.

## Timeline

??? question "¿La timeline muestra fechas incorrectas / solo años / fechas completas?"
    La timeline tiene su propia configuración de fechas. Vaya a **Settings → Advanced → Timeline: Years Only** para alternar entre la visualización solo de años y el formato de fecha completo.

??? question "¿Puedo agregar entradas directamente a la timeline?"
    No. La timeline se genera automáticamente a partir de sus experiencias laborales. Agregue o edite experiencias y la timeline se actualizará en consecuencia.

??? question "¿La bandera del país no se muestra en la timeline?"
    Asegúrese de que el campo **Country Code** de la experiencia esté configurado con un código de país ISO de 2 letras válido (por ejemplo, `us`, `gb`, `ch`, `de`, `fr`). Las banderas se cargan desde un CDN externo.

??? question "¿Qué sucede cuando tengo dos trabajos al mismo tiempo?"
    La timeline detecta automáticamente las posiciones superpuestas y las muestra como **pistas paralelas**. El trabajo simultáneo aparece en una línea de ramificación elevada con conectores en curva S que muestran los puntos de bifurcación y convergencia. No se necesita configuración — se basa completamente en las fechas de inicio y fin. Las superposiciones menores a 1 mes se ignoran (comunes durante las transiciones laborales).

??? question "¿Por qué la timeline muestra un logotipo en lugar del nombre de la empresa?"
    Si se ha cargado un logotipo de empresa para esa experiencia, la timeline muestra la imagen del logotipo en lugar del texto. Si el archivo del logotipo no existe, se muestra el nombre de la empresa como respaldo. Para eliminar un logotipo de la timeline, edite la experiencia y haga clic en **Remove** en la sección Company Logo.

## Idioma y actualizaciones

??? question "¿Cómo cambio el idioma de la interfaz de administración?"
    Haga clic en el **icono del globo** en la barra de herramientas y seleccione un idioma del menú desplegable en cuadrícula. El cambio se aplica de inmediato y se guarda entre sesiones.

??? question "¿Cómo verifico qué versión estoy utilizando?"
    Abra **Settings** — el número de versión se muestra en la esquina inferior izquierda de la ventana modal (por ejemplo, `v1.11.0`).

??? question "¿No veo el banner de actualización aunque hay una nueva versión disponible?"
    La verificación de versión se almacena en caché durante 24 horas. Reinicie su servidor (o contenedor Docker) para borrar la caché y forzar una nueva verificación. Su servidor también necesita acceso a Internet saliente para comunicarse con `raw.githubusercontent.com`.

## Datasets / Múltiples CVs

??? question "¿Qué es el dataset 'Default'?"
    El dataset predeterminado es la versión de su CV que los visitantes ven en la URL raíz (`/`). En la primera instalación, CV Manager crea automáticamente un dataset "Default" a partir de los datos de su CV. Puede cambiar qué dataset es el predeterminado en cualquier momento usando el botón de opción en la ventana modal Open.

??? question "¿Se guardan mis ediciones automáticamente?"
    Sí. Cada cambio que realice en la interfaz de administración (agregar, editar, eliminar, reordenar, activar/desactivar visibilidad) se guarda automáticamente en el dataset activo tras una breve demora. El banner muestra "Saving…" y luego "✓ Saved" como confirmación.

??? question "¿Qué sucede cuando 'cargo' un dataset?"
    Al cargar un dataset se cambia la copia de trabajo a ese dataset. Sus ediciones anteriores ya se guardaron automáticamente, por lo que no se pierde nada.

??? question "¿Pueden los visitantes ver mis ediciones en tiempo real?"
    No. El sitio público sirve el dataset predeterminado congelado, no sus ediciones en tiempo real. Los visitantes solo ven los cambios después de que el guardado automático los escribe en el dataset predeterminado. Si está editando un dataset que no es el predeterminado, los visitantes no verán esos cambios hasta que lo establezca como predeterminado.

??? question "¿Pueden los visitantes ver mis datasets guardados?"
    Solo si los hace públicos. Cada dataset tiene un interruptor en la ventana modal Open. Cuando se establece como público, esa versión se vuelve accesible en `/v/slug` en el sitio público (puerto 3001). Los datasets privados solo se pueden previsualizar desde la interfaz de administración.

??? question "¿Cómo comparto una versión específica del CV con alguien?"
    Abra la ventana modal **Open...**, establezca el dataset como público y luego haga clic en el icono de copiar junto a la URL del slug. Comparta ese enlace — funciona en el sitio público sin exponer la interfaz de administración.

??? question "¿Puedo tener múltiples versiones públicas al mismo tiempo?"
    Sí. Puede hacer públicos tantos datasets como desee. Cada uno obtiene su propia URL (por ejemplo, `/v/technical-cv-1`, `/v/marketing-cv-2`). La página principal `/` muestra el dataset predeterminado.

??? question "¿Puedo eliminar el dataset predeterminado?"
    No. El dataset actualmente seleccionado como predeterminado (mediante el botón de opción) no se puede eliminar. Establezca primero un dataset diferente como predeterminado y luego elimine el anterior.

??? question "¿Los motores de búsqueda indexarán mis URLs con versión?"
    De forma predeterminada, no — las páginas con versión reciben `noindex, nofollow`. Para permitir la indexación, active **Index Versioned URLs** en Settings → Advanced.

## Sitio público y SEO

??? question "¿Cómo comparto mi CV?"
    Comparta la URL de su servidor público (puerto 3001). Si ha configurado un dominio con Cloudflare Tunnel o un proxy inverso, comparta ese dominio. La URL raíz siempre muestra el dataset predeterminado. También puede compartir versiones específicas usando URLs públicas con versión (consulte [Datasets](../guide/datasets.md)).

??? question "¿Los motores de búsqueda indexarán mi CV?"
    De forma predeterminada, sí — la página pública principal incluye meta tags apropiados, un sitemap y robots.txt. Para evitar la indexación, cambie la configuración de **Search Engine Indexing** a "No Index" en Settings → Advanced. Las URLs públicas con versión (`/v/slug`) **no se indexan** de forma predeterminada; active **Index Versioned URLs** si desea que sean rastreadas.

??? question "¿Puedo agregar Google Analytics a mi CV?"
    Sí. Pegue su código de seguimiento en **Settings → Advanced → Tracking Code**. Se inyecta únicamente en las páginas públicas.

## Docker e infraestructura

??? question "¿Mis cambios no aparecen en el sitio público?"
    El sitio público sirve el **dataset predeterminado**, que se actualiza automáticamente cuando edita en la interfaz de administración. Intente una actualización forzada (`Ctrl+Shift+R`) en el sitio público. Si ejecuta contenedores separados, asegúrese de que compartan el mismo volumen de datos.

??? question "¿Recibo un error 'port already in use'?"
    Cambie la asignación de puertos del host en la configuración de Docker. Por ejemplo, asigne a `3010:3000` y `3011:3001`. **No** cambie la variable de entorno `PUBLIC_PORT` — esa es la puerta interna del contenedor.

??? question "¿Cómo hago una copia de seguridad de mis datos?"
    Dos opciones: use el botón **Export** en la barra de herramientas de administración (exporta en JSON), o haga una copia de seguridad del directorio `data/` que contiene la base de datos SQLite y las imágenes cargadas.

??? question "¿La foto de perfil no se muestra?"
    Asegúrese de que la imagen se haya cargado a través de la interfaz de administración. El archivo se almacena en `data/uploads/picture.jpeg`. Verifique los permisos del archivo si ejecuta en Linux.
