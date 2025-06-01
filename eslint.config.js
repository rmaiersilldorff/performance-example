import {config as angularEslintRecommended} from '@angular-eslint/eslint-plugin/configs/recommended';
import {config as angularTemplateRecommended} from '@angular-eslint/eslint-plugin-template/configs/recommended';
import {config as tseslint} from 'typescript-eslint';
import prettierRecommended from 'eslint-config-prettier'; // assuming this is how you're importing it

export default tseslint.config(
    {
        ignores: [
            ...globalIgnores,
            'server/**.js',
            'src/app/api/*.ts',
            'src/app/api/**/*.ts',
        ],
    },
    prettierRecommended,
    angularEslintRecommended,
    angularTemplateRecommended,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['src/**/*.ts', 'projects/**/*.ts'],
        rules: {
            '@angular-eslint/component-selector': [
                'warn',
                {
                    prefix: 'app',
                    style: 'kebab-case',
                    type: 'element',
                },
            ],
            '@angular-eslint/directive-selector': [
                'warn',
                {
                    prefix: 'app',
                    style: 'camelCase',
                    type: 'attribute',
                },
            ],
        },
    },
);
