import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchPlatformStats } from '@/api/stats'

export const useStatsStore = defineStore('stats', () => {
  const transactionVolume = ref(0)
  const energyPoolSize = ref(0)
  const userCount = ref(0)
  const depositAddress = ref('TFEWqCSUFs6tthfyLWFjpUepSqWPWKDZQx')
  const availableEnergy = ref(0)
  const isLoaded = ref(false)

  async function loadStats() {
    if (isLoaded.value) return

    try {
      const data = await fetchPlatformStats()
      transactionVolume.value = Number(data.data.transactionVolume) || 0
      energyPoolSize.value = Number(data.data.energyPoolSize) || 0
      userCount.value = Number(data.data.userCount) || 0
      depositAddress.value = data.data.depositAddress || 'TFEWqCSUFs6tthfyLWFjpUepSqWPWKDZQx'
      availableEnergy.value = Number(data.data.availableEnergy) || 0
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
