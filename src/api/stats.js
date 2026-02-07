const API_BASE_URL = 'http://localhost:23088/api/tron'

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
