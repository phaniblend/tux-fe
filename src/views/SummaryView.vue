<template>
    <div class="summary-view">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">Requirements Summary</h2>
        
        <div class="bg-white shadow rounded-lg p-6 mb-8">
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-700">Purpose</h3>
            <p class="text-gray-600">{{ requirements.purpose }}</p>
          </div>
          
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-700">Target Audience</h3>
            <p class="text-gray-600">{{ requirements.audience }}</p>
          </div>
          
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-700">Demographics</h3>
            <p class="text-gray-600">{{ requirements.demographics || 'Not specified' }}</p>
          </div>
          
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-700">User Goals</h3>
            <p class="text-gray-600">{{ requirements.goals }}</p>
          </div>
          
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-700">Use Cases</h3>
            <ul class="list-disc list-inside text-gray-600">
              <li v-for="(useCase, index) in requirements.use_cases" :key="index">
                {{ useCase }}
              </li>
            </ul>
          </div>
          
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-700">Simulate UX Team Roles</h3>
            <p class="text-gray-600">{{ requirements.simulate_roles ? 'Yes' : 'No' }}</p>
          </div>
        </div>
        
        <div class="flex justify-between">
          <button 
            @click="goBack" 
            class="py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Edit Requirements
          </button>
          
          <button 
            @click="generateDesign" 
            class="py-2 px-4 bg-primary text-white rounded-lg hover:bg-blue-700"
            :disabled="isGenerating"
          >
            {{ isGenerating ? 'Generating...' : 'Generate UX Design' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SummaryView',
    data() {
      return {
        // Mock data for now, will be replaced with store data
        requirements: {
          purpose: 'Help users manage their daily tasks efficiently',
          audience: 'Professionals and students',
          demographics: '25-45 years old, tech-savvy',
          goals: 'Organize tasks, set priorities, track progress',
          use_cases: [
            'Create and categorize tasks',
            'Set due dates and reminders',
            'Track completion status'
          ],
          simulate_roles: true
        },
        isGenerating: false
      }
    },
    methods: {
      goBack() {
        this.$router.push('/')
      },
      generateDesign() {
        this.isGenerating = true
        
        // Mock API call, will be replaced with actual API call
        setTimeout(() => {
          this.isGenerating = false
          this.$router.push('/ux-spec')
        }, 2000)
      }
    }
  }
  </script>