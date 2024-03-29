<?php
/**
 * Plugin Name:     Bloom
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     create-block
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_bloom_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/dist/bloom.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/bloom" block first.'
		);
	}
	$index_js     = 'dist/bloom.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'bloom-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'dist/bloom-editor.css';
	wp_register_style(
		'bloom-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'dist/bloom-style.css';

	wp_register_style(
		'bloom-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'bloom/smiley', array(
		'editor_script' => 'bloom-block-editor',
		'editor_style'  => 'bloom-block-editor',
		'style'         => 'bloom-block',
	) );

}
add_action( 'init', 'create_block_bloom_block_init' );

add_theme_support( 'align-wide' );
