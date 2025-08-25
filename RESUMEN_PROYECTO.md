# Resumen del Proyecto: @chapter-39/app-template

## 📋 Información General

**Nombre:** @chapter-39/app-template  
**Versión:** 0.1.0  
**Descripción:** Aplicación frontend desarrollada con Vue.js, Vite y Pinia  
**Estado:** Modo de Mantenimiento  
**Tipo:** Aplicación privada del ecosistema Chapter 39

## 🏗️ Arquitectura Técnica

### Stack Principal

- **Frontend Framework:** Vue 3 con TypeScript
- **Build Tool:** Vite 7.0.0
- **Estado Global:** Pinia 3.0.3
- **Router:** Vue Router 4.5.1
- **Internacionalización:** Vue i18n 11.1.11
- **Mobile:** Capacitor 7.4.2 (iOS/Android)

### Herramientas de Desarrollo

- **Linting:** ESLint 9.29.0 con configuración Vue/TypeScript
- **Formatting:** Prettier 3.6.2
- **Styling:** Sass/SCSS con Stylelint
- **Testing:** Vitest (unitarias) + Playwright (E2E)
- **Git Hooks:** Husky + lint-staged

### Dependencias Destacadas

- **@chapter-39/shared-template:** 0.3.1 (librería compartida del ecosistema)
- **@capacitor-community/apple-sign-in:** 7.0.1 (autenticación Apple)
- **@sentry/vue:** 10.1.0 (monitoreo de errores)
- **axios:** 1.11.0 (cliente HTTP)
- **gsap:** 3.13.0 (animaciones)
- **lucide-vue-next:** 0.539.0 (iconos)
- **zod:** 4.0.15 (validación de esquemas)

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── auth/           # Componentes de autenticación
│   └── __tests__/      # Tests de componentes
├── composables/        # Lógica reutilizable (useSetUser, useSyncUser)
├── config/             # Configuraciones centralizadas
│   ├── default/        # Valores por defecto
│   ├── options/        # Opciones disponibles
│   └── storage-keys/   # Keys para localStorage
├── languages/          # Archivos de traducción (en, es, sr)
├── middleware/         # Guards de rutas (authGuard)
├── plugins/            # Plugins (WebSocket)
├── router/             # Configuración de rutas modulares
├── services/           # Servicios (httpClient)
├── stores/             # Estado global con Pinia
│   ├── auth.ts         # Autenticación
│   ├── profile/        # Perfil de usuario
│   ├── settings/       # Configuraciones
│   └── ui/             # Estado de UI
├── styles/             # Estilos globales SCSS
├── utils/              # Utilidades (errorHandler, performance)
└── views/              # Páginas principales
    ├── Auth/           # Vistas de autenticación
    └── Settings/       # Vistas de configuración
```

## 🔧 Funcionalidades Principales

### Autenticación

- **Apple Sign-In:** Integración completa para web y nativo
- **Guards de Rutas:** Protección automática de rutas privadas
- **Token Management:** Almacenamiento seguro en localStorage
- **Modo Local:** Desarrollo sin autenticación

### Internacionalización

- **Idiomas Soportados:** Inglés (en), Español (es), Serbio (sr)
- **Sincronización Automática:** Entre store y i18n
- **Persistencia:** Configuración guardada en localStorage

### Theming

- **Temas Disponibles:** Light, Dark, High Contrast (Light/Dark)
- **System Theme:** Detección automática del tema del sistema
- **Persistencia:** Configuración guardada en localStorage

### Mobile (Capacitor)

- **Plataformas:** iOS y Android
- **Configuración:** Bundle ID y App Name via variables de entorno
- **Sincronización:** Scripts automatizados para build y sync

## 🛠️ Scripts Principales

### Desarrollo

- `npm run dev` - Servidor de desarrollo con hot reload
- `npm run build` - Build de producción
- `npm run preview` - Preview del build

### Testing

- `npm run test:unit` - Tests unitarios con Vitest
- `npm run test:e2e` - Tests E2E con Playwright

### Calidad de Código

- `npm run lint` - Linting con ESLint
- `npm run format` - Formateo con Prettier
- `npm run lint:style` - Linting de estilos

### Capacitor

- `npx cap sync ios` - Sincronizar con iOS
- `npx cap open ios` - Abrir en Xcode

## 🔒 Seguridad y Monitoreo

### Sentry Integration

- **Monitoreo de Errores:** Configurado para producción
- **DSN:** Integrado con el proyecto Chapter 39
- **PII Data:** Configurado para enviar datos de identificación

### Variables de Entorno

- **VITE_APP_ENV:** Entorno de aplicación
- **VITE_APPLE_BUNDLE_ID:** Bundle ID para iOS
- **VITE_APP_NAME:** Nombre de la aplicación
- **VITE_SENTRY_ORG/PROJECT:** Configuración de Sentry

## 🔄 Estado del Proyecto

### Modo Mantenimiento

- **Política:** Solo se aceptan correcciones críticas y parches de seguridad
- **Scope:** No se aceptan nuevas características
- **Support Policy:** Definida en SUPPORT.md
- **Security Policy:** Definida en SECURITY.md

### Flujo de CI/CD

- **Lint y Format:** Validación automática
- **Tests:** Condicionales según disponibilidad
- **Node Version:** >= 20
- **Husky Hooks:** Pre-commit con lint-staged

## 💡 Características Técnicas Destacadas

### Performance

- **Lazy Loading:** Rutas cargadas bajo demanda
- **Tree Shaking:** Optimización automática con Vite
- **Error Handling:** Sistema centralizado de manejo de errores
- **WebSocket Support:** Plugin integrado para tiempo real

### Modularidad

- **Stores Modulares:** Cada funcionalidad en su propio store
- **Composables:** Lógica reutilizable extraída
- **Config Centralizada:** Configuraciones organizadas por dominio
- **Routing Modular:** Rutas organizadas por funcionalidad

### Accesibilidad

- **High Contrast Themes:** Soporte para usuarios con necesidades especiales
- **i18n Completa:** Interfaz totalmente traducible
- **Semantic HTML:** Estructura semántica adecuada

## 🎯 Casos de Uso Principales

1. **Aplicación Web:** Interfaz completa en navegador
2. **App iOS:** Empaquetado nativo con Capacitor
3. **App Android:** Empaquetado nativo con Capacitor
4. **Desarrollo Local:** Modo desarrollo sin autenticación
5. **Multi-idioma:** Soporte para múltiples mercados
6. **Theming Dinámico:** Cambio de tema en tiempo real

Este proyecto representa una base sólida y bien estructurada para aplicaciones del ecosistema Chapter 39, con enfoque en modularidad, performance y experiencia de usuario multiplataforma.
