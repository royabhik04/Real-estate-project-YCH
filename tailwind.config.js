/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm:"0.75rem",
        base:"0.875rem",
        md:"1rem",
        lg:"1.25rem",
        xl:"1.5rem",
        xxl:"1.75rem",
        xxxl:"2.25rem",
        "4xl":"3rem",
        "5xl":"4rem"
      },
      backgroundImage: {
        'team-bg-image': "url('/public/team/team.png')",
        
      }
    },
  },
  plugins: [],
}

