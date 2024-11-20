/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors:{
        'strong-blue': '#3B82F6',
        'sky-blue': '#60A5FA',
        'cherry-blossom-red': '#FF5C5C',
        'golden-yellow': '#FACC15',
        'dark-blue-gray': '#1E293B',
        'soft-gray': '#D1D5DB',
        'soft-red': '#FF5C5C',
        'light-blue': '#E0F2FE',
        'light-pink': '#FDF2F2',
        'neutral-gray': '#F3F4F6',
        'green': '#22C55E',
        'orange': '#F59E0B',
        'red': '#EF4444',
        'white': '#FFFFFF',
        'soft-gray-2': '#9CA3AF',
        'light-red': '#FFEEEE',
        'deep-navy-gray': '#1E293B',
        'cherry-blossom-pink': '#FDF2F2',
        'mount-fuji-gray': '#9CA3AF',
        'light-blue-gray': '#E0F2FE',
      }
    },
  },
  plugins: [require('daisyui'),],
}