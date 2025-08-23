# 🌥️ Solvo App

[![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-%3E%3D9-red)](https://www.npmjs.com/)
![Private Repo](https://img.shields.io/badge/status-private-lightgrey)
![Vite](https://img.shields.io/badge/vite-%5E5-blue)
![Vue 3](https://img.shields.io/badge/vue-3.x-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-ready-blue)
![Capacitor](https://img.shields.io/badge/capacitor-integrated-blueviolet)

> **Solvo App** es la interfaz web oficial del ecosistema **Solvo** — construida con **Vue 3** y **Vite**, optimizada para velocidad, modularidad y escalabilidad. Ahora con integración lista para apps móviles usando **Capacitor**.

---

## 📦 Características

- ⚡ **Vite** para un desarrollo ultra rápido.
- 🎨 **Vue 3 + TypeScript** con tipado estricto.
- 📱 **Capacitor** para empaquetar como app móvil (iOS/Android).
- 🧩 Arquitectura modular para escalar fácilmente.
- 🛡️ **ESLint + Prettier** para un código limpio y consistente.
- ✅ **Vitest** y **Playwright** para pruebas unitarias y E2E.
- 🔒 Diseñada para uso privado y despliegue seguro.

---

## 🛠️ Requisitos previos

- **Node.js** `>=18`
- **npm** `>=9` (o **pnpm/yarn**)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) instalado (y **Vetur** deshabilitado).
- **Capacitor** (`@capacitor/core`, `@capacitor/cli`) para integración móvil.

---

## 🚀 Instalación

```sh
npm install
```

---

## 📱 Integración con Capacitor

1. **Instalar Capacitor**
   ```sh
   npm install @capacitor/core @capacitor/cli
   ```
2. **Inicializar Capacitor**
   ```sh
   npx cap init solvo.app com.solvo.app
   ```
3. **Agregar plataformas**
   ```sh
   npx cap add android
   npx cap add ios
   ```
4. **Compilar la app web**
   ```sh
   npm run build
   ```
5. **Sincronizar los archivos**
   ```sh
   npx cap sync
   ```
6. **Abrir en Android Studio o Xcode**
   ```sh
   npx cap open android
   npx cap open ios
   ```

### Ejemplo de uso de Capacitor en Vue

```ts
// src/composables/useDevice.ts
import { Device } from '@capacitor/device'
import { ref } from 'vue'

export function useDeviceInfo() {
  const device = ref(null)
  const getDevice = async () => {
    device.value = await Device.getInfo()
  }
  return { device, getDevice }
}
```

```vue
<script setup lang="ts">
import { useDeviceInfo } from '@/composables/useDevice'
const { device, getDevice } = useDeviceInfo()
onMounted(getDevice)
</script>
<template>
  <pre>{{ device }}</pre>
</template>
```

---

## 💻 Scripts disponibles

| Comando                                     | Descripción                                          |
|---------------------------------------------|------------------------------------------------------|
| `npm run dev`                               | Inicia el servidor de desarrollo con hot reload.     |
| `npm run build`                             | Compila y minifica para producción.                  |
| `npm run preview`                           | Previsualiza el build de producción localmente.      |
| `npm run test:unit`                         | Ejecuta las pruebas unitarias con Vitest.            |
| `npm run test:e2e`                          | Ejecuta las pruebas end-to-end con Playwright.       |
| `npm run lint`                              | Analiza y corrige el código con ESLint.              |
| `npx cap sync`                              | Sincroniza la app web con Capacitor.                 |
| `npx cap open android/ios`                  | Abre en el IDE correspondiente.                      |

---

## 🧪 Testing

### Unit Tests (Vitest)
```sh
npm run test:unit
```

### End-to-End (Playwright)
```sh
npx playwright install # solo la primera vez
npm run build
npm run test:e2e
```

Opciones:
```sh
npm run test:e2e -- --project=chromium
npm run test:e2e -- tests/example.spec.ts
npm run test:e2e -- --debug
```

---

## 📂 Estructura del proyecto

```plaintext
solvo-app/
 ├─ public/          # Recursos estáticos
 ├─ src/
 │   ├─ assets/      # Imágenes, estilos globales
 │   ├─ components/  # Componentes reutilizables
 │   ├─ composables/ # Lógica reutilizable
 │   ├─ router/      # Configuración de rutas
 │   ├─ store/       # Estado global
 │   ├─ views/       # Vistas principales
 │   └─ main.ts      # Punto de entrada
 ├─ tests/           # Pruebas unitarias y e2e
 ├─ capacitor.config.ts # Configuración de Capacitor
 └─ vite.config.ts   # Configuración de Vite
```

---

## 📜 Licencia

Privado — Todos los derechos reservados.

---

❤️ Hecho con dedicación por **Vasa**