import { defineStore } from 'pinia'
import { useDesignStore } from './design'
import axios from 'axios'

export const useMockupsStore = defineStore('mockups', {
  state: () => ({
    mockups: [],
    isLoading: false,
    isRegenerating: false,
    error: null
  }),
  
  getters: {
    hasMockups: (state) => state.mockups.length > 0
  },
  
  actions: {
    async generateMockups() {
      const designStore = useDesignStore()
      const finalPrompt = designStore.finalPrompt
      
      if (!finalPrompt) {
        this.error = 'No design prompt available. Please generate a design first.'
        return false
      }
      
      this.isLoading = true
      this.error = null
      
      try {
        // This would be an actual API call in production
        // const response = await axios.post('/api/generate_ui_images', {
        //   prompt: finalPrompt,
        //   screens: designStore.screens.map(screen => screen.name)
        // })
        // this.mockups = response.data
        
        // Mock API response for now
        await new Promise(resolve => setTimeout(resolve, 3000))
        
        // Mock data
        this.mockups = designStore.screens.map((screen, index) => ({
          id: `mockup-${index}`,
          screenName: screen.name,
          description: screen.description,
          imageUrl: `https://via.placeholder.com/800x450?text=${screen.name.replace(' ', '+')}+Mockup`
        }))
        
        this.isLoading = false
        return true
      } catch (error) {
        this.isLoading = false
        this.error = error.message || 'Failed to generate mockups'
        return false
      }
    },
    
    async regenerateMockups() {
      this.isRegenerating = true
      
      try {
        // This would be an actual API call with different seed settings
        // const response = await axios.post('/api/regenerate_ui_images', {
        //   previous_mockups: this.mockups.map(m => m.id)
        // })
        
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 3000))
        
        // Just update the URLs with a random parameter for this mock
        this.mockups = this.mockups.map(mockup => ({
          ...mockup,
          imageUrl: `${mockup.imageUrl}&rand=${Math.random()}`
        }))
        
        this.isRegenerating = false
        return true
      } catch (error) {
        this.isRegenerating = false
        this.error = error.message || 'Failed to regenerate mockups'
        return false
      }
    },
    
    resetMockups() {
      this.mockups = []
      this.error = null
    }
  }
})