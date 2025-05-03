import { defineStore } from 'pinia'
import { useRequirementsStore } from './requirements'
import axios from 'axios'

export const useDesignStore = defineStore('design', {
  state: () => ({
    designOutput: null,
    isLoading: false,
    error: null
  }),
  
  getters: {
    hasDesign: (state) => !!state.designOutput,
    roleInsights: (state) => state.designOutput?.roleInsights || null,
    screens: (state) => state.designOutput?.screens || [],
    iaStructure: (state) => state.designOutput?.ia_structure || {},
    finalPrompt: (state) => state.designOutput?.final_prompt_for_image_model || ''
  },
  
  actions: {
    async generateDesign() {
      const requirementsStore = useRequirementsStore()
      const requirements = requirementsStore.formData
      
      this.isLoading = true
      this.error = null
      
      try {
        // This would be an actual API call in production
        // const response = await axios.post('/api/generate_design', requirements)
        // this.designOutput = response.data
        
        // Mock API response for now
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Mock data
        this.designOutput = {
          roleInsights: {
            productDesigner: "The app should focus on quick task entry with minimal friction. The key screens would include a dashboard, task creation form, and task details view. Typography and visual hierarchy will be crucial for scannable task lists.",
            businessAnalyst: "Based on the target audience of professionals, the app should emphasize time-saving features and productivity metrics. Integration with calendars would be a valuable addition for the target demographic.",
            uxArchitect: "The information architecture should follow a hierarchical model with categories > tasks > subtasks. Navigation should prioritize quick access to different task views and filters."
          },
          screens: [
            {
              name: "Dashboard",
              description: "Main landing page showing task overview by category",
              elements: ["header", "task list", "category filters", "quick add button"]
            },
            {
              name: "Task Creation",
              description: "Form for adding new tasks with all details",
              elements: ["title field", "description", "due date picker", "category selector", "priority dropdown"]
            },
            {
              name: "Task Details",
              description: "Detailed view of a single task with all information",
              elements: ["task header", "description", "subtasks", "notes", "attachments", "deadline info"]
            },
            {
              name: "Settings",
              description: "User preferences and app configuration",
              elements: ["notification settings", "theme selector", "data management", "account info"]
            }
          ],
          ia_structure: {
            "main": {
              "dashboard": {
                "views": ["all", "today", "upcoming", "completed"]
              },
              "categories": {
                "personal": {},
                "work": {},
                "education": {}
              },
              "tasks": {
                "properties": ["title", "description", "dueDate", "priority", "status"]
              },
              "settings": {
                "user": {},
                "notifications": {},
                "appearance": {}
              }
            }
          },
          final_prompt_for_image_model: "Create a modern, clean task management app UI with a focus on professionals. The main dashboard should show categorized tasks with clear visual hierarchy. Use a blue and white color scheme with accent colors for priorities. Include task list, category filters, and a prominent quick-add button."
        }
        
        this.isLoading = false
        return true
      } catch (error) {
        this.isLoading = false
        this.error = error.message || 'Failed to generate design'
        return false
      }
    },
    
    resetDesign() {
      this.designOutput = null
      this.error = null
    }
  }
})