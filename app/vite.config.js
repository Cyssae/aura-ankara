import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths for better portability
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        products: 'products.html',
        bookings: 'bookings.html',
        events: 'events.html',
        trustees: 'trustees.html',
        'product-ankara-necklace': 'product-ankara-necklace.html',
        'product-eko-agbada': 'product-eko-agbada.html',
        'product-gele-set-royal': 'product-gele-set-royal.html',
        'product-harmattan-trousers': 'product-harmattan-trousers.html',
        'product-heritage-blazer': 'product-heritage-blazer.html',
        'product-imperial-two-piece': 'product-imperial-two-piece.html',
        'product-indigo-wrap': 'product-indigo-wrap.html',
        'product-lagos-jacket': 'product-lagos-jacket.html',
        'product-monarch-blazer': 'product-monarch-blazer.html',
        'product-oba-robe': 'product-oba-robe.html',
        'product-olowalu-wrap': 'product-olowalu-wrap.html',
        'product-oyo-shirt': 'product-oyo-shirt.html',
        'product-pocket-square': 'product-pocket-square.html',
        'product-sahara-jumpsuit': 'product-sahara-jumpsuit.html',
        'product-solar-flare-skirt': 'product-solar-flare-skirt.html',
        'product-velvet-tuxedo': 'product-velvet-tuxedo.html',
        'product-zaria-midi-gown': 'product-zaria-midi-gown.html',
      },
    },
  },
});
