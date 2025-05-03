<template>
    <div class="image-card bg-white rounded-lg shadow overflow-hidden">
      <div class="aspect-w-16 aspect-h-9 bg-gray-100">
        <img 
          v-if="imageUrl" 
          :src="imageUrl" 
          :alt="screenName" 
          class="object-cover w-full h-full"
        />
        <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
          <span class="text-gray-500">Image not available</span>
        </div>
      </div>
      
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-1">{{ screenName }}</h3>
        <p class="text-gray-600 text-sm mb-3">{{ description }}</p>
        
        <div class="flex justify-between">
          <button 
            @click="$emit('view-fullsize', { id, imageUrl })" 
            class="text-sm text-blue-600 hover:text-blue-800"
          >
            View Full Size
          </button>
          
          <button 
            @click="$emit('download', { id, imageUrl, screenName })" 
            class="text-sm text-green-600 hover:text-green-800"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageCard',
    props: {
      id: {
        type: String,
        required: true
      },
      screenName: {
        type: String,
        required: true
      },
      description: {
        type: String,
        default: ''
      },
      imageUrl: {
        type: String,
        default: ''
      }
    },
    emits: ['view-fullsize', 'download']
  }
  </script>