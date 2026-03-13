// const API_BASE_URL = 'http://localhost:23055/api/tron'
// const API_BASE_URL = 'http://13.251.201.149:23055/api/tron'
// const API_BASE_URL = 'https://realflowpower.com/api/api/tron'
const API_BASE_URL = `${window.location.origin}/api/api/tron`

export async function fetchPlatformStats() {
  try {
    const response = await fetch(`${API_BASE_URL}/stats`)
    if (!response.ok) {
      throw new Error('Failed to fetch stats')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching platform stats:', error)
    throw error
  }
}

