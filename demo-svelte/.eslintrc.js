module.exports = {
    extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'prettier/@typescript-eslint'],
    env: {
        es6: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2019,
        createDefaultProgram: true,
        project: 'tsconfig.json',
        sourceType: 'module'
    },
    globals: {
        gVars: true
    },
    plugins: ['svelte3', '@typescript-eslint'],
    overrides: [
        { files: '*.svelte', processor: 'svelte3/svelte3' },
        {
            files: '*.ts',
            rules: {
                'eslint-plugin-svelte3/parse-error': 'off',
                'no-undef': 'off'
            }
        }
    ],
    root: true
};
