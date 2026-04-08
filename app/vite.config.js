import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: '/aura-ankara/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        bookings: resolve(__dirname, 'bookings.html'),
        events: resolve(__dirname, 'events.html'),
        trustees: resolve(__dirname, 'trustees.html'),
        'product-ankara-necklace': resolve(__dirname, 'product-ankara-necklace.html'),
        'product-eko-agbada': resolve(__dirname, 'product-eko-agbada.html'),
        'product-gele-set-royal': resolve(__dirname, 'product-gele-set-royal.html'),
        'product-harmattan-trousers': resolve(__dirname, 'product-harmattan-trousers.html'),
        'product-heritage-blazer': resolve(__dirname, 'product-heritage-blazer.html'),
        'product-imperial-two-piece': resolve(__dirname, 'product-imperial-two-piece.html'),
        'product-indigo-wrap': resolve(__dirname, 'product-indigo-wrap.html'),
        'product-lagos-jacket': resolve(__dirname, 'product-lagos-jacket.html'),
        'product-monarch-blazer': resolve(__dirname, 'product-monarch-blazer.html'),
        'product-oba-robe': resolve(__dirname, 'product-oba-robe.html'),
        'product-olowalu-wrap': resolve(__dirname, 'product-olowalu-wrap.html'),
        'product-oyo-shirt': resolve(__dirname, 'product-oyo-shirt.html'),
        'product-pocket-square': resolve(__dirname, 'product-pocket-square.html'),
        'product-sahara-jumpsuit': resolve(__dirname, 'product-sahara-jumpsuit.html'),
        'product-solar-flare-skirt': resolve(__dirname, 'product-solar-flare-skirt.html'),
        'product-velvet-tuxedo': resolve(__dirname, 'product-velvet-tuxedo.html'),
        'product-zaria-midi-gown': resolve(__dirname, 'product-zaria-midi-gown.html'),
      },
    },
  },
});
