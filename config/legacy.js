module.exports = {
	extends: [
		'./defaults.js',
	].map(require.resolve),
	rules: {
		'padded-blocks': 'off',
	},
};
