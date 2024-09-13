/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DEV_URL: string
    readonly VITE_PRO_URL: string
    readonly VITE_ENV: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }