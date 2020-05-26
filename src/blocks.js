import { registerBlockType } from '@wordpress/blocks';

// Register Blocks
import * as content from './blocks/content';
import * as hero from './blocks/hero';
import * as section from './blocks/section';

const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, settings } = block;

	registerBlockType( name, {
		...settings,
	} );
};

export const registerBloomBlocks = () => {
	[ content, hero, section ].forEach( registerBlock );
};

registerBloomBlocks();
