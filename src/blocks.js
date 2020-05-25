import { registerBlockType } from '@wordpress/blocks';

// Register Blocks
import * as heroAppShots from './blocks/hero-appshots';
import * as heroCentered from './blocks/hero-centered';

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
	[ heroAppShots, heroCentered ].forEach( registerBlock );
};

registerBloomBlocks();
