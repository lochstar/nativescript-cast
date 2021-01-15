import VersionNumber from '@nativescript-community/plugin-seed/svelte';

import Demo1 from './Demo1.svelte';
import Demo2 from './Demo2.svelte';
import Development from './Development.svelte';

export function install() {
    VersionNumber.register();
}

export const demos = [
    { name: 'Demo 1', component: Demo1 },
    { name: 'Demo 2', component: Demo2 },
    { name: 'Development', component: Development }
];
