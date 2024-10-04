// next.config.mjs
import pkg from '@next/env';

const {loadEnvConfig} = pkg

// import { loadEnvConfig } from '@next/env';

// Load environment variables based on the environment (production or development)
const isProd = process.env.NODE_ENV === 'production';

// Load environment variables from .env files
loadEnvConfig(process.cwd(), !isProd);

export default {
  // Conditional configurations based on the environment
  output: isProd ? process.env.NEXT_PUBLIC_OUTPUT : undefined,
  images: {
    unoptimized: isProd ? process.env.NEXT_PUBLIC_IMAGES_UNOPTIMIZED === 'true' : false,
  },
  // Other common configurations can go here
};
