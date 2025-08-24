<script setup lang="ts">
import { onMounted } from "vue";
// import { gsap } from "gsap";
import TheAuthButton from "@/components/auth/TheAuthButton.vue";
import TheLocalMode from "@/components/auth/TheLocalMode.vue";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";
import { useModeStore } from "@/stores/settings/mode";
import { X } from "lucide-vue-next";

const { isAuthenticated } = useAuthStore();
const { isLocalMode } = useModeStore();

onMounted(() => {
  console.info(`User authenticated: ${isAuthenticated}`);
  console.info(`Local mode: ${isLocalMode}`);
});

// onMounted(() => {
//   gsap.from("#animated-text", { opacity: 0, y: 20, duration: 2 });
// });
</script>

<template>
  <article>
    <button @click="router.replace({ path: '/' })" class="top-right-cta"><X /></button>

    <h1>Nos vemos ✌️</h1>
    <p>Para adiós sin dramas</p>

    <footer>
      <TheAuthButton />
      <TheLocalMode v-if="!(isAuthenticated || isLocalMode)" />
    </footer>
  </article>
</template>

<style lang="scss" scoped>
@use "@/styles/variables";
@use "@/styles/type";

article {
  align-items: center;
  color: var(--rgba-text);
  display: flex;
  flex-direction: column;
  font-family: variables.$font-family;
  height: 100vh;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  white-space: nowrap;
  width: 100vw;
}

.light {
  article {
    background:
      radial-gradient(circle at 30% 20%, var(--rgb-pink) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, var(--rgb-cyan) 0%, transparent 50%),
      linear-gradient(135deg, var(--rgb-purple), var(--rgb-blue));
  }
}

.dark {
  article {
    background:
      linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      radial-gradient(circle at 30% 20%, var(--rgb-pink) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, var(--rgb-cyan) 0%, transparent 50%),
      linear-gradient(135deg, var(--rgb-purple), var(--rgb-blue));
  }
}

h1 {
  @extend %type-large-title;

  text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}

p,
button {
  @extend %type-body;

  text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}

footer {
  position: absolute;
  bottom: variables.$grid * 6;
}
</style>
