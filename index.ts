import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { patchCssModules } from 'vite-css-modules';
import type { Plugin } from 'vite';
import className from 'css-class-generator';

const presets = (): Plugin => ({
    name: '@basmilius/vite-vue-preset',

    config: () => ({
        build: {
            assetsInlineLimit: 0,
            cssMinify: 'esbuild',
            minify: 'esbuild',
            rollupOptions: {
                output: {
                    assetFileNames: '[hash].[ext]',
                    chunkFileNames: '[hash].js',
                    entryFileNames: '[hash].js',
                    compact: true,
                    minifyInternalExports: true
                }
            }
        },
        css: {
            preprocessorMaxWorkers: true,
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            },
            modules: {
                generateScopedName(name: string): string {
                    if (name.startsWith('i__const_')) {
                        name = name.substring(9);
                        name = name.substring(0, name.length - 2);
                    }

                    const hash = createHash('sha1')
                        .update(name)
                        .digest('hex')
                        .substring(0, 5);

                    return className(parseInt(hash, 16));
                }
            }
        },
        json: {
            stringify: true
        },
        resolve: {
            alias: {
                '@': resolve(process.cwd(), './src')
            },
            extensions: [
                '.js',
                '.ts',
                '.json',
                '.vue'
            ]
        }
    })
});

export default () => [
    patchCssModules(),
    presets()
] satisfies Plugin[];
