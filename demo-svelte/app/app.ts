import { svelteNative } from 'svelte-native';
import Menu from './Menu.svelte';

import { install } from './linked-components/install';
install();

svelteNative(Menu, {});
