<template>
  <div class="w-full h-[1451px] relative overflow-hidden">
    <div class="w-full h-13 flex justify-center items-center pb-2 pt-2">
      <div class="w-6 h-6 flex-none absolute left-4 cursor-pointer" @click="goBack">
        <img src="@/assets/left_arraw.png" class="w-6 h-6 object-contain" />
      </div>
      <div class="justify-start text-black text-base font-medium font-['PingFang_SC']">
        知识库
      </div>
    </div>

    <div class="docs-container">
      <iframe
        ref="iframeRef"
        :src="iframeSrc"
        class="w-full h-[calc(100vh-64px)] border-none"
        @load="handleIframeLoad"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.docs-container {
  width: 100%;
  overflow: hidden;
}
</style>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, watch, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()
const iframeRef = ref(null)

// Compute iframe src based on route parameter
const iframeSrc = computed(() => {
  const page = route.params.page
  if (!page) {
    return '/docs/index.html'
  }
  return `/docs/${page}.html`
})

// Scroll page to top
const scrollToTop = () => {
  window.scrollTo(0, 0)
  // Also scroll iframe content to top after a small delay to ensure it's loaded
  setTimeout(() => {
    if (iframeRef.value && iframeRef.value.contentWindow) {
      iframeRef.value.contentWindow.scrollTo(0, 0)
    }
  }, 100)
}

// Handle iframe load and scroll to top
const handleIframeLoad = () => {
  scrollToTop()
}

// Scroll to top when component mounts
onMounted(() => {
  scrollToTop()
})

// Watch for page parameter changes and scroll to top
watch(() => route.params.page, () => {
  scrollToTop()
})

const goBack = () => {
  router.back()
}

</script>
