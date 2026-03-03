# Configuración avanzada

## Indexación en motores de búsqueda (Meta Robots)

Controle cómo los motores de búsqueda interactúan con su CV público en **Configuración → Avanzado → Indexación en motores de búsqueda**:

| Opción | Efecto |
|--------|--------|
| **Index, Follow** | El CV aparece en los resultados de búsqueda, los motores de búsqueda siguen sus enlaces (predeterminado) |
| **No Index, Follow** | El CV se oculta de los resultados de búsqueda, pero los enlaces se siguen |
| **Index, No Follow** | El CV aparece en los resultados de búsqueda, pero los enlaces salientes se ignoran |
| **No Index, No Follow** | Completamente invisible para los motores de búsqueda |

Esta configuración afecta tanto la etiqueta `<meta name="robots">` como el archivo `/robots.txt`, y se aplica del lado del servidor para compatibilidad con todos los rastreadores de motores de búsqueda.

## Indexación de URL versionadas

Por defecto, las URL públicas versionadas (`/v/slug`) **no son indexadas** por los motores de búsqueda — obtienen una meta etiqueta `noindex, nofollow`. Esto es útil si desea compartir enlaces directos sin que esas páginas aparezcan en los resultados de búsqueda.

Para permitir que los motores de búsqueda rastreen las URL versionadas, habilite **Indexar URL versionadas** en **Configuración → Avanzado**. Esta configuración es independiente de la opción principal de Indexación en motores de búsqueda mencionada arriba, que solo afecta la página principal `/`.

## Código de seguimiento

Pegue el código de seguimiento de analítica (Google Analytics, Matomo, Plausible, etc.) en **Configuración → Avanzado → Código de seguimiento**. El código se inyecta solo en las páginas públicas del CV — no en la interfaz de administración.
