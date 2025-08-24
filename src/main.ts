import "@/styles/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import "@/middleware/authGuard";
import i18n, { setupI18nLanguageSync } from "@/i18n";
import ws from "@/plugins/ws";
import * as Sentry from "@sentry/vue";
import { useAuthStore } from "@/stores/auth.ts";
import { useSyncUser } from "@/composables/useSyncUser.ts";

const app = createApp(App);

if (import.meta.env.MODE === "production") {
  Sentry.init({
    app,
    dsn: "https://2f92ebae7f54cb358bc834200fbefad0@o69793.ingest.us.sentry.io/4509813471248384",
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
  });
} else {
  console.log("Sentry is disabled in development mode.");
}

app.use(createPinia());

app.use(i18n);
setupI18nLanguageSync();

app.use(router);
app.use(ws);

const { isAuthenticated } = useAuthStore();
if (isAuthenticated) {
  // Automatically sync user data if authenticated
  // This is useful for initial data load, e.g., when the app starts
  // and the user is already logged in.
  const { syncUserData } = useSyncUser();
  syncUserData().then(console.log);
}

app.mount("#app");
