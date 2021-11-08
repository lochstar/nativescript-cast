import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.cast',
  main: 'app/app.js',
  appResourcesPath: 'app/App_Resources',
  webpackConfigPath: 'webpack.config.custom.js',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    maxLogcatObjectSize: 2048,
  },
} as NativeScriptConfig;
