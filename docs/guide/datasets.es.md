# Datasets (Múltiples versiones del CV)

## Cómo funcionan los datasets

Los datasets son instantáneas guardadas de su CV. Un dataset siempre es el **predeterminado** — esta es la versión que los visitantes ven en su URL raíz (`/`). Puede crear datasets adicionales para diferentes audiencias (por ejemplo, un CV técnico, un CV de gestión) y compartirlos en sus propias URLs.

Cuando instala CV Manager por primera vez, se crea automáticamente un dataset "Default" a partir de los datos de su CV. Todas las ediciones que realice en el administrador se **guardan automáticamente** en el dataset activo — no hay un paso separado de "guardar".

## El banner del dataset activo

Un banner debajo de la barra de herramientas muestra qué dataset está editando actualmente. Muestra:

- El **nombre del dataset** (por ejemplo, "Default", "Technical CV")
- Una **insignia "Default"** si este dataset es el que se sirve en `/`
- Un **estado de guardado automático** — muestra brevemente "Saving…" y luego "✓ Saved" después de cada edición

Cada cambio que realice (agregar elementos, editar contenido, reordenar, alternar visibilidad) se guarda automáticamente en el dataset activo después de un breve retraso.

## Guardar un nuevo dataset

Haga clic en **Save As...** en la barra de herramientas, introduzca un nombre (por ejemplo, "Technical CV", "Marketing Role"), y el estado actual de su CV se guarda como una nueva instantánea. El nuevo dataset se convierte en el activo.

## El modal de apertura

Haga clic en **Open...** para ver todos los datasets guardados. Una **leyenda** en la parte superior explica los tres controles:

| Control | Propósito |
|---------|-----------|
| **Botón de radio** | Selecciona qué dataset se sirve en su URL raíz `/` (el predeterminado) |
| **Interruptor** | Comparte otros datasets en su propia URL `/v/slug` |
| **Botón de ojo** | Previsualiza un dataset guardado sin hacerlo público |

Cada fila de dataset muestra:

- **Nombre** y fecha de última actualización
- **Insignia "Default"** — en el dataset seleccionado con el botón de radio
- **Insignia "Editing"** — en el dataset actualmente cargado en el administrador
- Una **URL versionada** (por ejemplo, `/v/technical-cv-1`) — oculta para el dataset predeterminado ya que se sirve en `/`
- Botón **Load** — cambia a este dataset (muestra "Reload" si ya está activo)
- Botón **Delete** — elimina permanentemente el dataset (deshabilitado para el predeterminado actual)

## Establecer el dataset predeterminado

El dataset predeterminado es la versión que los visitantes ven cuando visitan su URL raíz (`/`). Para cambiarlo:

1. Abra el modal **Open...**
2. Haga clic en el **botón de radio** junto al dataset que desea como su CV público
3. El cambio surte efecto inmediatamente — el sitio público ahora sirve ese dataset

Esto desacopla su CV público de su edición. Puede editar contenido libremente en el administrador sin que los visitantes vean cambios en progreso hasta que esté listo.

## URLs públicas versionadas

Cada dataset guardado (aparte del predeterminado) obtiene una ruta URL única (por ejemplo, `/v/technical-cv-1`). De forma predeterminada, estas son **privadas** — solo accesibles desde la interfaz de administración para previsualización.

Para compartir una versión específica públicamente:

1. Abra el modal **Open...**
2. Encuentre el dataset que desea compartir
3. Active el **interruptor** junto a él — se vuelve azul y aparece una insignia verde **Public**
4. La URL `/v/slug` ahora es accesible en el **sitio público** (puerto 3001)

Esto le permite compartir versiones personalizadas del CV con diferentes audiencias. Por ejemplo, podría hacer público un "Technical CV" para roles de ingeniería mientras mantiene un "Management CV" privado hasta que sea necesario.

**Copiar la URL**: Haga clic en el icono de copiar junto al slug para copiar la URL completa a su portapapeles. El mensaje de notificación le indicará si copió una URL pública o de solo previsualización.

!!! note
    La página pública principal en `/` siempre muestra el **dataset predeterminado** — no sus ediciones en vivo. Esto significa que puede experimentar con seguridad en el administrador sin afectar lo que ven los visitantes.
