<template>
  <div class="w-96 h-[1451px] relative overflow-hidden">
    <div class="w-96 h-13 flex justify-center items-center pb-2 pt-2">
      <div class="w-6 h-6 flex-none absolute left-4 cursor-pointer" @click="goBack">
        <img src="@/assets/left_arraw.png" class="w-6 h-6 object-contain" />
      </div>
      <div class="justify-start text-black text-base font-medium font-['PingFang_SC']">
        知识库
      </div>
    </div>

    <div class="docs-container">
      <iframe
        src="/docs/index.html"
        class="w-full h-[calc(100vh-64px)] border-none"
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
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}

</script>
