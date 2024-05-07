import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import VueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    //设置别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/global.scss";
          @import "./src/assets/styles/math.scss";
        `
      }
    }
  },
  server: {
    open: true,
    host: true
  }
});
