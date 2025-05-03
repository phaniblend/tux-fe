<template>
    <div class="question-form">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">UX Design Requirements</h2>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- App Purpose -->
          <div class="form-group">
            <label for="purpose" class="block text-gray-700 font-medium mb-2">App Purpose</label>
            <input 
              id="purpose" 
              v-model="formData.purpose" 
              type="text" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="What is the main purpose of this application?"
              required
            />
          </div>
          
          <!-- Target Audience -->
          <div class="form-group">
            <label for="audience" class="block text-gray-700 font-medium mb-2">Target Audience</label>
            <input 
              id="audience" 
              v-model="formData.audience" 
              type="text" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Who will use this application?"
              required
            />
          </div>
          
          <!-- User Demographics -->
          <div class="form-group">
            <label for="demographics" class="block text-gray-700 font-medium mb-2">User Demographics</label>
            <input 
              id="demographics" 
              v-model="formData.demographics" 
              type="text" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Age range, technical skill level, etc."
            />
          </div>
          
          <!-- User Goals -->
          <div class="form-group">
            <label for="goals" class="block text-gray-700 font-medium mb-2">User Goals</label>
            <textarea 
              id="goals" 
              v-model="formData.goals" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="What should users be able to achieve with this app?"
              rows="3"
              required
            ></textarea>
          </div>
          
          <!-- Use Cases -->
          <div class="form-group">
            <label class="block text-gray-700 font-medium mb-2">Use Cases</label>
            <div v-for="(useCase, index) in formData.use_cases" :key="index" class="flex items-center mb-2">
              <input 
                v-model="formData.use_cases[index]" 
                type="text" 
                class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Describe a use case"
              />
              <button 
                @click="removeUseCase(index)" 
                type="button"
                class="ml-2 p-2 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
            <button 
              @click="addUseCase" 
              type="button"
              class="mt-2 py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              + Add Use Case
            </button>
          </div>
          
          <!-- Simulate Roles toggle -->
          <div class="form-group flex items-center">
            <input 
              id="simulate_roles" 
              v-model="formData.simulate_roles" 
              type="checkbox" 
              class="mr-2 h-5 w-5 text-blue-600"
            />
            <label for="simulate_roles" class="text-gray-700">Simulate UX Design Team Roles</label>
          </div>
          
          <!-- Submit Button -->
          <div class="form-group">
            <button 
              type="submit" 
              class="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Generate UX Design
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'QuestionForm',
    data() {
      return {
        formData: {
          purpose: '',
          audience: '',
          demographics: '',
          goals: '',
          use_cases: [''],
          simulate_roles: true
        }
      }
    },
    methods: {
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
      submitForm() {
        // Remove any empty use cases
        this.formData.use_cases = this.formData.use_cases.filter(useCase => useCase.trim() !== '')
        
        // Store form data in state management
        // TODO: Add Pinia store integration
        
        // Navigate to summary page
        this.$router.push('/summary')
      }
    }
  }
  </script>