# RECOVERY_LOG

Proyecto: Salinas-en4x4 (Salinas 4x4 Experience by Lonko Hostal)
Raíz: /Users/userthink/Documents/Salinas-en4x4
Respaldo: /Users/userthink/Documents/Salinas-en4x4-backup-20261028-110747 (107 archivos, verificado)
Fuente canónica: no disponible (descargado archivo por archivo)
Node: v22.14.0  Gestor: npm 10.9.2 (usando --legacy-peer-deps por incompatibilidad de arborist en npm 10 con peers de React 19; lockfile original bun.lock preservado)

## Cambios

| N.º | Fecha | Archivo | Qué se cambió | Motivo / evidencia | Cómo revertir | Verificación |
|---|---|---|---|---|---|---|
| 1 | 2026-10-28 | .lovable/project.json | Creado directorio `.lovable` y copiado `project.json` | Lovable requiere su configuración en `.lovable/project.json` (`template: tanstack_start_ts_current`) | `rm -rf .lovable` | Archivo verificado idéntico al de la raíz |
| 2 | 2026-10-28 | .gitignore, .prettierrc, .prettierignore | Restaurados archivos con punto inicial a partir de `gitignore`, `prettierrc`, `prettierignore`. Agregado `.env*` a `.gitignore`. | Al descargar manualmente se omitió el punto inicial. Requisito de seguridad antes de commit baseline. | `git rm` de dichos archivos | `git status` y verificación de reglas de exclusión |
| 3 | 2026-10-28 | src/components/ui/tooltip.tsx | Creado componente Tooltip con `@radix-ui/react-tooltip` | `src/components/ui/sidebar.tsx` importaba `@/components/ui/tooltip` no existente | `rm src/components/ui/tooltip.tsx` | `npx tsc --noEmit` y `inventory.mjs` sin errores |
| 4 | 2026-10-28 | src/assets/*.asset.json | Creados 11 descriptores `.asset.json` apuntando a `/__l5e/assets-v1/<archivo>` | El código (`images.ts`, `Header.tsx`, `Footer.tsx`) importa `*.asset.json`. Las imágenes originales (`.jpg`, `.png`) existían en `src/assets/`. | `rm src/assets/*.asset.json` | `inventory.mjs` pasó de 13 imports sin resolver a 0. `src/test/content.test.ts` pasó 100%. |
| 5 | 2026-10-28 | public/__l5e/assets-v1/* | Copiadas imágenes locales a `public/__l5e/assets-v1/` y creado `src/assets/placeholder.svg` | Permitir servir las fotos originales tanto en dev como en build bajo la ruta de activos de Lovable sin 404 | `rm -rf public/__l5e` | `curl http://localhost:8080/__l5e/assets-v1/4x4-stone-forest.jpg` devuelve HTTP 200 OK |
| 6 | 2026-10-28 | package-lock.json, node_modules | Instalación de dependencias con `npm install --legacy-peer-deps` | Falta de dependencias locales. `--legacy-peer-deps` requerido por fallo interno de arborist de npm 10 al resolver peers de React 19. | `rm -rf node_modules package-lock.json` | `npm ls --depth=0` con 0 dependencias faltantes |

## Pruebas

| Ruta / función | Resultado (Pasa/Falla/No probado) | Evidencia |
|---|---|---|
| `inventory.mjs` | **Pasa** | 0 imports sin resolver, stack identificado correctamente como TanStack Start |
| `npx tsc --noEmit` | **Pasa** | 0 errores de tipado en TypeScript |
| Vitest tests (`npm test`) | **Pasa** | 2/2 suites, 13/13 pruebas exitosas (content: 12 tests, app-routing: 1 test) |
| `npm run build` | **Pasa** | Compilación exitosa de cliente, SSR y servidor Nitro (`.output/server` y `.output/public`) |
| `npm run dev` (SSR / HTTP) | **Pasa** | Dev server activo en `http://localhost:8080/`. `curl http://localhost:8080/` retorna HTTP 200 con HTML completo hidratable. |
| Manejo de 404 (`/non-existent-page`) | **Pasa** | Retorna HTTP 404 con página de error NotFound estilizada y enlace a inicio |
| Carga de assets (`/__l5e/assets-v1/...`) | **Pasa** | Retorna HTTP 200 con Content-Type `image/jpeg` |

## Variables de entorno (solo nombres)

| Nombre | Dónde se usa | Estado |
|---|---|---|
| (Ninguna) | El frontend no utiliza variables de entorno (`import.meta.env.*`). | No requiere configuración adicional. |

## Pendientes y limitaciones

- **Número de WhatsApp / Contacto:** En `src/content/site.ts` el número de WhatsApp está configurado en blanco (`""`) por diseño (esperando confirmación del propietario). El botón "Book now" redirecciona honestamente a `#booking` en modo "coming soon", tal como lo verifica `src/test/content.test.ts`.
- **Ejecución local:** El servidor de desarrollo corre en `http://localhost:8080/` (puerto asignado automáticamente por Vite / TanStack Start).
