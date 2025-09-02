# 🌥️ App Template

> Project Status: Maintenance Mode

This repository is in maintenance mode. We accept critical bug fixes, security patches, and CI/docs chores only. Feature requests are not in scope. To report a bug, please open a GitHub issue using the Bug Report template and review support expectations in SUPPORT.md.

[View Support Policy](SUPPORT.md) · [Security Policy](SECURITY.md)

> App Template is the official web interface for the **Chapter 39** ecosystem — built with **Vue 3** and **Vite**, optimized for speed, modularity, and scalability. Now with ready-to-use mobile app integration via **Capacitor**.

---

## 📦 Features

- ⚡ **Vite** for ultra-fast development.
- 🎨 **Vue 3 + TypeScript** with strict typing.
- 📱 **Capacitor** to package as a mobile app (iOS/Android).
- 🧩 Modular architecture to scale easily.
- 🛡️ **ESLint + Prettier** for clean and consistent code.
- ✅ **Vitest** and **Playwright** for unit and E2E tests.
- 🔒 Designed for private use and secure deployment.

---

## 🛠️ Prerequisites

- **Node.js** `>=20`
- **npm** `>=9` (or **pnpm/yarn**)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) installed (and **Vetur** disabled).
- **Capacitor** (`@capacitor/core`, `@capacitor/cli`) for mobile integration.

---

## 🚀 Installation

```sh
npm install
```

---

## 📱 Capacitor Integration

1. **Install Capacitor**
   ```sh
   npm install @capacitor/core @capacitor/cli
   ```
2. **Initialize Capacitor**
   ```sh
   npx cap init vasa.app-dev me.vasa.app-dev
   ```
3. **Add platforms**
   ```sh
   npx cap add android
   npx cap add ios
   ```
4. **Build the web app**
   ```sh
   npm run build
   ```
5. **Sync files**
   ```sh
   npx cap sync
   ```
6. **Open in Android Studio or Xcode**
   ```sh
   npx cap open android
   npx cap open ios
   ```

### Example of using Capacitor in Vue

```ts
// src/composables/useDevice.ts
import { Device } from "@capacitor/device";
import { ref } from "vue";

export function useDeviceInfo() {
  const device = ref(null);
  const getDevice = async () => {
    device.value = await Device.getInfo();
  };
  return { device, getDevice };
}
```

```vue
<script setup lang="ts">
import { useDeviceInfo } from "@/composables/useDevice";
const { device, getDevice } = useDeviceInfo();
onMounted(getDevice);
</script>
<template>
  <pre>{{ device }}</pre>
</template>
```

---

## 💻 Available Scripts

| Command                    | Description                               |
| -------------------------- | ----------------------------------------- |
| `npm run dev`              | Start development server with hot reload. |
| `npm run build`            | Build and minify for production.          |
| `npm run preview`          | Preview the production build locally.     |
| `npm run test:unit`        | Run unit tests with coverage (Vitest).    |
| `npm run test:e2e`         | Run end-to-end tests with Playwright.     |
| `npm run lint`             | Lint and fix code with ESLint.            |
| `npx cap sync`             | Sync the web app with Capacitor.          |
| `npx cap open android/ios` | Open in the corresponding IDE.            |

---

## 🧪 Testing

### Unit Tests (Vitest)

```sh
npm run test:unit
```

Generates coverage reports in `coverage/` (HTML, text, lcov). Open `coverage/index.html` locally to inspect detailed file coverage, or consume `coverage/lcov.info` in external tools.

### End-to-End (Playwright)

```sh
npx playwright install # first run only
npm run build
npm run test:e2e
```

Options:

```sh
npm run test:e2e -- --project=chromium
npm run test:e2e -- tests/example.spec.ts
npm run test:e2e -- --debug
```

---

## 🔐 Variables de entorno y Secrets (GitHub Actions)

Este proyecto usa Vite y lee variables con prefijo `VITE_*` en el cliente (`import.meta.env.*`) y `process.env.*` durante build/configuración. En CI, estas variables deben estar definidas como GitHub Action Secrets.

### Variables requeridas/optativas

- VITE_APP_NAME: Nombre de la aplicación. Requerida. También usada por Capacitor.
- VITE_APP_VERSION: Versión de la app (semver). Requerida.
- VITE_APP_ENV: Entorno (`development` | `staging` | `production`). Requerida.
- VITE_API_URL: URL base del API (https). Requerida.
- VITE_API_WS_URI: URL de WebSocket del API (wss). Requerida.
- VITE_APPLE_TEAM_ID: Apple Developer Team ID. Requerida.
- VITE_APPLE_BUNDLE_ID: Bundle ID de la app. Requerida.
- VITE_APPLE_SERVICE_ID: Service ID para Sign in with Apple (web). Requerida para login web.
- VITE_APPLE_REDIRECT_URI: Redirect URI configurado en el backend/Apple. Requerida.
- VITE_APPLE_SCOPE: Scopes solicitados (por ej. `name email`). Requerida.
- VITE_SENTRY_DSN: DSN de Sentry para errores en runtime del cliente. Opcional pero recomendado en producción.
- VITE_SENTRY_ORG: Organización de Sentry. Requerida si se suben sourcemaps en CI.
- VITE_SENTRY_PROJECT: Proyecto de Sentry. Requerida si se suben sourcemaps en CI.
- SENTRY_AUTH_TOKEN: Token de Sentry para subir sourcemaps (scopes típicos: `project:write`, `org:read`). Requerida si se suben sourcemaps en CI.
- VITE_SERVER_ORIGIN: Origin público usado por el dev/preview server. Opcional.
- VITE_SERVER_ALLOWED_HOSTS: Lista separada por comas de hosts permitidos. Opcional.
- PERSONAL_ACCESS_TOKEN: Token de GitHub con `read:packages` (y `repo` si aplica). Usado por CI para autenticar `npm ci` contra GitHub Packages (inyectado como `NODE_AUTH_TOKEN`).
- GITHUB_TOKEN: Proporcionado automáticamente por GitHub Actions (no requiere configuración). Usado por el flujo de verificación del título del PR.

Notas de uso:

- El plugin de Sentry en `vite.config.ts` se ejecuta durante `build` y requiere `SENTRY_AUTH_TOKEN`, `VITE_SENTRY_ORG` y `VITE_SENTRY_PROJECT` para subir sourcemaps. Si no se necesita Sentry en CI, configure estos secretos igualmente (con valores válidos) o adapte el pipeline fuera de mantenimiento.
- El server de Vite usa `VITE_SERVER_*` solo en desarrollo/preview; son opcionales para build.

### Qué falta en tu configuración actual

Has creado: `PERSONAL_ACCESS_TOKEN`, `VITE_API_URL`, `VITE_API_WS_URI`, `VITE_APPLE_BUNDLE_ID`, `VITE_APPLE_REDIRECT_URI`, `VITE_APPLE_SCOPE`, `VITE_APPLE_TEAM_ID`, `VITE_APP_ENV`, `VITE_APP_NAME`, `VITE_APP_VERSION`.

Pendientes por añadir para que todo el proyecto quede cubierto:

- VITE_APPLE_SERVICE_ID
- VITE_SENTRY_ORG
- VITE_SENTRY_PROJECT
- VITE_SENTRY_DSN
- SENTRY_AUTH_TOKEN
- (Opcional) VITE_SERVER_ORIGIN
- (Opcional) VITE_SERVER_ALLOWED_HOSTS

### Cómo configurar GitHub Action Secrets

Opción A — desde la interfaz web:

- Repository Settings → Secrets and variables → Actions → New repository secret → añadir cada clave anterior con su valor.

Opción B — con GitHub CLI (`gh`):

- Ejecuta estos comandos desde la raíz del repo, sustituyendo los valores de ejemplo por los tuyos.

```sh
# Core
gh secret set VITE_APP_NAME --body "MiApp"
gh secret set VITE_APP_VERSION --body "0.1.0"
gh secret set VITE_APP_ENV --body "production"

# API / WebSocket
gh secret set VITE_API_URL --body "https://api.ejemplo.com"
gh secret set VITE_API_WS_URI --body "wss://api.ejemplo.com/ws"

# Apple Sign In
gh secret set VITE_APPLE_TEAM_ID --body "AB12C3D45E"
gh secret set VITE_APPLE_BUNDLE_ID --body "com.ejemplo.app"
gh secret set VITE_APPLE_SERVICE_ID --body "com.ejemplo.web"
gh secret set VITE_APPLE_REDIRECT_URI --body "https://api.ejemplo.com/auth/apple/callback"
gh secret set VITE_APPLE_SCOPE --body "name email"

# Sentry (para sourcemaps en build y DSN en runtime)
gh secret set VITE_SENTRY_ORG --body "mi-org"
gh secret set VITE_SENTRY_PROJECT --body "mi-proyecto"
gh secret set VITE_SENTRY_DSN --body "https://<public>@o<org>.ingest.sentry.io/<project>"
gh secret set SENTRY_AUTH_TOKEN --body "sntrys_..."

# Vite server (opcional)
gh secret set VITE_SERVER_ORIGIN --body "https://app.ejemplo.com"
gh secret set VITE_SERVER_ALLOWED_HOSTS --body "localhost,app.ejemplo.com"

# GitHub Packages (CI)
# Usa tu token personal con scope read:packages (el workflow lo inyecta como NODE_AUTH_TOKEN)
gh secret set PERSONAL_ACCESS_TOKEN --body "ghp_..."
```

Consejos de seguridad:

- No subas `.env` con valores reales al repositorio. Usa Secrets para CI y `.env` local solo en desarrollo.
- Revisa los scopes del token de Sentry y del token personal de GitHub para que sean mínimos y adecuados.

---

## 📂 Project structure

```plaintext
app-template/
 ├─ public/          # Static assets
 ├─ src/
 │   ├─ assets/      # Images, global styles
 │   ├─ components/  # Reusable components
 │   ├─ composables/ # Reusable logic
 │   ├─ router/      # Route configuration
 │   ├─ store/       # Global state
 │   ├─ views/       # Main views
 │   └─ main.ts      # Entry point
 ├─ tests/           # Unit and e2e tests
 ├─ capacitor.config.ts # Capacitor configuration
 └─ vite.config.ts   # Vite configuration
```

---

## 📜 License

Private — All rights reserved.

---

❤️ Made with care by **Vasa**
