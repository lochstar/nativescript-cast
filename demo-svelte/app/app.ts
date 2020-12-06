import { svelteNative } from 'svelte-native';
import Menu from './Menu.svelte';

import VersionNumber from '@nativescript-community/plugin-seed/svelte';
VersionNumber.register();

svelteNative(Menu, {});
