import edit from './edit';
import save from './save';
import metadata from './block.json';

import { __ } from '@wordpress/i18n';

const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'Hero: Centered', 'bloom' ),
	/* translators: block description */
	description: __( 'Does a thing.', 'bloom' ),
	category,
	icon: 'smiley',
	keywords: [
		'bloom',
		/* translators: block keyword */
		__( 'tabs', 'bloom' ),
		/* translators: block keyword (abbreviation for "frequently asked questions") */
		__( 'faq', 'bloom' ),
	],
	supports: {
		html: false,
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings };
