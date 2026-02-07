import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchPlatformStats } from '@/api/stats'

export const useStatsStore = defineStore('stats', () => {
  const transactionVolume = ref(120500000)
  const energyPoolSize = ref(216500000)
  const userCount = ref(367500000)
  const depositAddress = ref('TFEWqCSUFs6tthfyLWFjpUepSqWPWKDZQx')
  const availableEnergy = ref(15009928)
  const isLoaded = ref(false)

  async function loadStats() {
    if (isLoaded.value) return

    try {
      const data = await fetchPlatformStats()
      transactionVolume.value = Number(data.data.transactionVolume) || 100500000
      energyPoolSize.value = Number(data.data.energyPoolSize) || 216500000
      userCount.value = Number(data.data.userCount) || 367500000
      depositAddress.value = data.data.depositAddress || 'TFEWqCSUFs6tthfyLWFjpUepSqWPWKDZQx'
      availableEnergy.value = Number(data.data.availableEnergy) || 15009928
      isLoaded.value = true
    } catch (error) {
      console.error('Failed to load stats:', error)
    }
  }

  return {
    transactionVolume,
    energyPoolSize,
    userCount,
    depositAddress,
    availableEnergy,
    loadStats
  }
})
