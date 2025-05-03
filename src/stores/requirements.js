import { defineStore } from 'pinia'

export const useRequirementsStore = defineStore('requirements', {
  state: () => ({
    formData: {
      purpose: '',
      audience: '',
      demographics: '',
      goals: '',
      use_cases: [''],
      simulate_roles: true
    },
    isSubmitting: false,
    submitError: null
  }),
  
  actions: {
    updateFormData(data) {
      this.formData = { ...this.formData, ...data }
    },
    
    addUseCase() {
      this.formData.use_cases.push('')
    },
    
    removeUseCase(index) {
      this.formData.use_cases.splice(index, 1)
      // Ensure there's always at least one use case input
      if (this.formData.use_cases.length === 0) {
        this.formData.use_cases.push('')
      }
    },
    
    updateUseCase(index, value) {
      this.formData.use_cases[index] = value
    },
    
    async submitRequirements() {
      // Clean form data
      const cleanedUseCases = this.formData.use_cases.filter(useCase => useCase.trim() !== '')
      
      // Create payload
      const payload = {
        ...this.formData,
        use_cases: cleanedUseCases
      }
      
      this.isSubmitting = true
      this.submitError = null
      
      try {
        // This would be an API call in production
        // await fetch('/api/requirements', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(payload)
        // })
        
        // Mock API call for now
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        this.isSubmitting = false
        return true
      } catch (error) {
        this.isSubmitting = false
        this.submitError = error.message || 'Failed to submit requirements'
        return false
      }
    }
  }
})