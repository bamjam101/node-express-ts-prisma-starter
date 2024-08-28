// @ts-check
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config({
	languageOptions: {
		parserOptions: {
			project: true,
			// @ts-ignore
			tsconfigRootDir: import.meta.dirname
		}
	},
	files: ['**/*.ts'],
	extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, eslintConfigPrettier],
	rules: {
		'no-useless-catch': 'error',
		'no-unsafe-member-access': 'off',
		quotes: ['error', 'single', { allowTemplateLiterals: true }]
	}
})

