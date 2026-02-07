<template>
  <div class="w-96 h-[1451px] relative bg-slate-50 overflow-hidden">
    <div class="w-96 h-13 flex justify-center items-center pb-2 pt-2">
      <div class="w-6 h-6 flex-none absolute left-4 cursor-pointer" @click="goBack">
        <img src="@/assets/left_arraw.png" class="w-6 h-6 object-contain" />
      </div>
      <div class="justify-start text-black text-base font-medium font-['PingFang_SC']">
        转账示例
      </div>
    </div>

    <div class="w-96">
      <div class="m-4 h-[822px] bg-white rounded-2xl py-4 pl-4">
        <img src="@/assets/transfer.png" class="w-full h-full object-contain" />
      </div>
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
