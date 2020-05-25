module.exports = {
	ident: 'postcss',
	plugins: [
		require( '@wordpress/postcss-themes' )(),
		require( 'autoprefixer' ),
		require( 'postcss-color-function' ),
	],
};
