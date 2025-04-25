import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // server: {
    //    https: {
    //        key: fs.readFileSync(path.resolve(__dirname, 'certificates/cert.key')),
    //        cert: fs.readFileSync(path.resolve(__dirname, 'certificates/cert.crt')),
    //    },
    //    port: 5173,
    // },
})
