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
| `npm run test:unit`        | Run unit tests with Vitest.               |
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
