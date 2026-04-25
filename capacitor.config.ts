import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.devispro.app',
  appName: 'DevisPro',
  webDir: 'dist',
  backgroundColor: '#0a0e1a',
  android: {
    allowMixedContent: true
  }
};

export default config;
