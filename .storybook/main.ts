// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials'
	],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	babel: async (options) => ({
		...options
	}),
	core: {
		disableTelemetry: true,
	},
	docs: {
		autodocs: true,
	},
};

export default config;