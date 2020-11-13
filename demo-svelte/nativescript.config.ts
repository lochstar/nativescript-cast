import { NativeScriptConfig } from '@nativescript/core';

export default {
    id: 'org.nativescript.demosvelte',
    appResourcesPath: 'App_Resources',
    android: {
        maxLogcatObjectSize: 2048,
        markingMode: 'none',
        v8Flags: '--expose_gc',
        codeCache: true
    }
} as NativeScriptConfig;
