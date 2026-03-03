# Preguntas frecuentes

## General

??? question "¿Se almacenan mis datos en algún servidor externo?"
    No. Todo se ejecuta localmente en su servidor. Los datos de su CV se almacenan en un archivo de base de datos SQLite en el directorio `/data`.

??? question "¿Puedo ejecutar CV Manager sin Docker?"
    Sí. Instale Node.js 18+, ejecute `npm install` en el directorio del proyecto y luego `node src/server.js`. La administración se ejecuta en el puerto 3000 y el sitio público en el puerto 3001.

??? question "¿Pueden varias personas usar la misma instancia?"
    CV Manager está diseñado como una aplicación de un solo usuario. Cada instancia gestiona el CV de una persona. Para múltiples personas, ejecute contenedores separados.

## Edición

??? question "¿Cómo marco una posición como 'actual'?"
    Deje el campo **Fecha de fin** vacío. Se mostrará como "Presente" en el CV.

??? question "¿Puedo reordenar elementos dentro de una sección?"
    Sí. La mayoría de los elementos admiten reordenamiento con arrastrar y soltar. El orden se guarda automáticamente.

??? question "¿Cómo agrego viñetas a una experiencia?"
    Edite la experiencia e ingrese los puntos destacados en el campo **Puntos destacados** — una viñeta por línea.

??? question "¿Cómo agrego un logotipo de empresa?"
    Edite la experiencia, desplácese hasta la sección **Logotipo de empresa** y haga clic en **Elegir imagen** para subir uno. También puede hacer clic en **Usar existente** para reutilizar un logotipo que ya haya subido. Habilite el interruptor **"Sincronizar logotipo en todas las experiencias de [Empresa]"** para aplicar el mismo logotipo a todas las experiencias en esa empresa.

??? question "Eliminé algo por accidente. ¿Puedo deshacerlo?"
    No hay función de deshacer. Dado que las ediciones se guardan automáticamente en el conjunto de datos activo, el cambio se persiste inmediatamente. Si tiene una exportación anterior o un conjunto de datos guardado separado, puede restaurar desde ahí. Es una buena práctica exportar su CV regularmente como respaldo.

## Secciones personalizadas

??? question "¿Cuántas secciones personalizadas puedo crear?"
    No hay un límite fijo. Cree tantas como necesite.

??? question "¿Puedo cambiar el tipo de diseño de una sección personalizada después de crearla?"
    Sí. Edite la sección y seleccione un diseño diferente. Tenga en cuenta que algunos campos pueden no transferirse entre tipos de diseño (por ejemplo, al cambiar de tarjetas a enlaces sociales).

??? question "¿Cuál es la diferencia entre los diseños de 'Viñetas' y 'Texto libre'?"
    **Viñetas** muestra cada línea como un elemento de lista con viñeta y un título de grupo. **Texto libre** muestra texto plano con saltos de línea preservados y sin título — similar a la sección Acerca de/Biografía.

## Impresión y PDF

??? question "¿Por qué mi PDF se ve diferente a la pantalla?"
    La salida de impresión usa estilos de impresión dedicados optimizados para papel. Algunos efectos visuales (estados hover, animaciones, degradados) se simplifican. Los elementos ocultos y los controles de administración se eliminan automáticamente.

??? question "¿Cómo hago que mi CV quepa en menos páginas?"
    Intente habilitar **Permitir división de secciones** y **Permitir división de elementos** en la configuración de Impresión y exportación. También puede ocultar elementos o secciones menos importantes, o usar diseños de secciones personalizadas más compactos. También puede escalar la impresión mediante el diálogo de impresión de cualquier navegador (a veces está un poco oculto).

??? question "¿Por qué faltan algunos elementos en mi CV impreso?"
    Verifique si esos elementos han sido marcados como ocultos (ícono de ojo). Los elementos ocultos se excluyen de la salida de impresión y de la vista pública.

??? question "¿Los números de página no aparecen?"
    Asegúrese de que **Números de página** esté habilitado en Configuración → Impresión y exportación. Algunos visores de PDF del navegador pueden no mostrar los números de página generados por CSS — intente descargar el PDF y abrirlo en un lector dedicado.

## Línea de tiempo

??? question "¿La línea de tiempo muestra las fechas incorrectas / solo años / fechas completas?"
    La línea de tiempo tiene su propia configuración de fecha. Vaya a **Configuración → Avanzado → Línea de tiempo: Solo años** para alternar entre la visualización de solo años y el formato de fecha completo.

??? question "¿Puedo agregar entradas a la línea de tiempo directamente?"
    No. La línea de tiempo se genera automáticamente a partir de sus experiencias laborales. Agregue o edite experiencias y la línea de tiempo se actualiza correspondientemente.

??? question "¿La bandera del país no aparece en la línea de tiempo?"
    Asegúrese de que el campo **Código de país** en la experiencia esté configurado con un código de país ISO de 2 letras válido (por ejemplo, `us`, `gb`, `ch`, `de`, `fr`). Las banderas se cargan desde un CDN externo.

??? question "¿Qué sucede cuando tengo dos empleos al mismo tiempo?"
    La línea de tiempo detecta automáticamente posiciones superpuestas y las muestra como **pistas paralelas**. El empleo concurrente aparece en una línea de ramificación elevada con conectores en curva S que muestran los puntos de bifurcación y fusión. No se necesita configuración — se basa completamente en sus fechas de inicio/fin. Las superposiciones de menos de 1 mes se ignoran (comunes durante transiciones laborales).

??? question "¿Por qué la línea de tiempo muestra un logotipo en lugar del nombre de la empresa?"
    Si ha subido un logotipo de empresa para esa experiencia, la línea de tiempo muestra la imagen del logotipo en lugar de texto. Si falta el archivo del logotipo, se muestra el nombre de la empresa como respaldo. Para eliminar un logotipo de la línea de tiempo, edite la experiencia y haga clic en **Eliminar** en la sección Logotipo de empresa.

## Idioma y actualizaciones

??? question "¿Cómo cambio el idioma de la administración?"
    Haga clic en el **ícono de globo** en la barra de herramientas y seleccione un idioma de la cuadrícula desplegable. El cambio se aplica inmediatamente y se guarda entre sesiones.

??? question "¿Cómo verifico qué versión estoy ejecutando?"
    Abra **Configuración** — el número de versión se muestra en la esquina inferior izquierda del modal (por ejemplo, `v1.11.0`).

??? question "¿No veo el banner de actualización aunque hay una nueva versión disponible?"
    La verificación de versión se almacena en caché durante 24 horas. Reinicie su servidor (o contenedor Docker) para limpiar la caché y forzar una verificación nueva. Su servidor también necesita acceso a internet saliente para llegar a `raw.githubusercontent.com`.

## Conjuntos de datos / Múltiples CVs

??? question "¿Qué es el conjunto de datos 'Predeterminado'?"
    El conjunto de datos predeterminado es la versión de su CV que los visitantes ven en su URL raíz (`/`). En la primera instalación, CV Manager crea automáticamente un conjunto de datos "Predeterminado" a partir de los datos de su CV. Puede cambiar qué conjunto de datos es el predeterminado en cualquier momento usando el botón de radio en el modal de Abrir.

??? question "¿Se guardan mis ediciones automáticamente?"
    Sí. Cada cambio que realice en la administración (agregar, editar, eliminar, reordenar, cambiar visibilidad) se guarda automáticamente en el conjunto de datos activo después de un breve retraso. El banner muestra "Guardando…" y luego "Guardado" para confirmar.

??? question "¿Qué sucede cuando 'Cargo' un conjunto de datos?"
    Cargar un conjunto de datos cambia su copia de trabajo a ese conjunto de datos. Sus ediciones anteriores ya se guardaron automáticamente, por lo que no se pierde nada.

??? question "¿Pueden los visitantes ver mis ediciones en tiempo real?"
    No. El sitio público sirve el conjunto de datos predeterminado congelado, no sus ediciones en vivo. Los visitantes solo ven los cambios después de que el autoguardado los escribe en el conjunto de datos predeterminado. Si está editando un conjunto de datos no predeterminado, los visitantes no verán esos cambios en absoluto hasta que lo establezca como predeterminado.

??? question "¿Pueden los visitantes ver mis conjuntos de datos guardados?"
    Solo si los hace públicos. Cada conjunto de datos tiene un interruptor en el modal de Abrir. Cuando se establece como público, esa versión se vuelve accesible en `/v/slug` en el sitio público (puerto 3001). Los conjuntos de datos privados solo son previsualizables desde la interfaz de administración.

??? question "¿Cómo comparto una versión específica del CV con alguien?"
    Abra el modal **Abrir...**, active el conjunto de datos como público, luego haga clic en el ícono de copiar junto a la URL del slug. Comparta ese enlace — funciona en el sitio público sin exponer su interfaz de administración.

??? question "¿Puedo tener múltiples versiones públicas al mismo tiempo?"
    Sí. Puede hacer públicos tantos conjuntos de datos como desee. Cada uno obtiene su propia URL (por ejemplo, `/v/technical-cv-1`, `/v/marketing-cv-2`). La página principal `/` muestra el conjunto de datos predeterminado.

??? question "¿Puedo eliminar el conjunto de datos predeterminado?"
    No. El conjunto de datos actualmente seleccionado como predeterminado (mediante el botón de radio) no se puede eliminar. Establezca primero un conjunto de datos diferente como predeterminado y luego elimine el anterior.

??? question "¿Los motores de búsqueda indexarán mis URL versionadas?"
    Por defecto, no — las páginas versionadas obtienen `noindex, nofollow`. Para permitir la indexación, habilite **Indexar URL versionadas** en Configuración → Avanzado.

## Sitio público y SEO

??? question "¿Cómo comparto mi CV?"
    Comparta la URL de su servidor público (puerto 3001). Si ha configurado un dominio con Cloudflare Tunnel o un proxy inverso, comparta ese dominio. La URL raíz siempre muestra su conjunto de datos predeterminado. También puede compartir versiones específicas usando URL públicas versionadas (ver [Conjuntos de datos](../guide/datasets.md)).

??? question "¿Los motores de búsqueda indexarán mi CV?"
    Por defecto, sí — la página pública principal incluye meta etiquetas adecuadas, un sitemap y robots.txt. Para evitar la indexación, cambie la configuración de **Indexación en motores de búsqueda** a "No Index" en Configuración → Avanzado. Las URL públicas versionadas (`/v/slug`) **no se indexan** por defecto; habilite **Indexar URL versionadas** si desea que sean rastreadas.

??? question "¿Puedo agregar Google Analytics a mi CV?"
    Sí. Pegue su código de seguimiento en **Configuración → Avanzado → Código de seguimiento**. Se inyecta solo en las páginas públicas.

## Docker e infraestructura

??? question "¿Mis cambios no aparecen en el sitio público?"
    El sitio público sirve el **conjunto de datos predeterminado**, que se actualiza automáticamente cuando edita en la administración. Intente una actualización forzada (`Ctrl+Shift+R`) en el sitio público. Si ejecuta contenedores separados, asegúrese de que compartan el mismo volumen de datos.

??? question "¿Recibo un error de 'puerto ya en uso'?"
    Cambie el mapeo de puertos del host en su configuración Docker. Por ejemplo, mapee a `3010:3000` y `3011:3001`. **No** cambie la variable de entorno `PUBLIC_PORT` — ese es el puerto interno del contenedor.

??? question "¿Cómo respaldo mis datos?"
    Dos opciones: use el botón **Exportar** en la barra de herramientas de administración (exporta JSON), o respalde el directorio `data/` que contiene la base de datos SQLite y las imágenes subidas.

??? question "¿La foto de perfil no aparece?"
    Asegúrese de que la imagen fue subida a través de la interfaz de administración. El archivo se almacena en `data/uploads/picture.jpeg`. Verifique los permisos del archivo si está ejecutando en Linux.
