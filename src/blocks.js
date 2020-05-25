import { registerBlockType } from '@wordpress/blocks';

// Register Blocks
import * as content from './blocks/content';
import * as heroAppShots from './blocks/hero-appshots';
import * as heroCallout from './blocks/hero-callout';
import * as heroCentered from './blocks/hero-centered';
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
	[ content, heroAppShots, heroCallout, heroCentered, section ].forEach(
		registerBlock
	);
};

registerBloomBlocks();
