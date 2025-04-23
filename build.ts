import { build } from 'bun';
import { generateDts } from './src/oxc';

try {
    await build({
        entrypoints: ['src/index.ts', 'src/oxc.ts'],
        root: 'src',
        outdir: 'dist',
        minify: true,
        sourcemap: 'linked',
        splitting: false,
        format: 'esm',
        target: 'node',
        packages: 'external',
        plugins: [
            generateDts()
        ]
    });
} catch (err) {
    console.error('✘ Build failed!');
    console.error(err);
    process.exit(1);
}

console.log('✔ Build complete!');
