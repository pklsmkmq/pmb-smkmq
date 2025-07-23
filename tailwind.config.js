// tailwind.config.js
module.exports = {
    // ...
    theme: {
      screens: { // Ini menimpa default! Pastikan semua yang Anda butuhkan ada di sini.
        'sm': '640px',
        'md': '768px',
        'lg': '1024px', // Pastikan 'lg' ada di sini!
        'xl': '1280px',
        '2xl': '1536px',
        'my-custom-bp': '992px', // Contoh breakpoint tambahan
      },
    },
    // ...
  }