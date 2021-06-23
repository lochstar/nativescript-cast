import CastButton from '@codelab/nativescript-cast/svelte';

import Demo1 from './Demo1.svelte';
import Demo2 from './Demo2.svelte';
import Development from './Development.svelte';

export function install() {
    CastButton.register();
}

export const demos = [
    { name: 'Demo 1', path: "demo1", component: Demo1 },
    { name: 'Demo 2', path: "demo2", component: Demo2 },
    { name: 'Development', path: "development", component: Development }
];
