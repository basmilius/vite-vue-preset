import type { Plugin } from 'vite';
import composeLibrary from './composeLibrary';

type LibraryPlugin = () => Plugin;

export const flux: LibraryPlugin = composeLibrary('@flux-ui/components', '$flux');
export const fluxDashboard: LibraryPlugin = composeLibrary('@flux-ui/dashboard', '$fluxDashboard');
