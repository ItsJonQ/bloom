import edit from './edit';
import save from './save';
import metadata from './block.json';

import { __ } from '@wordpress/i18n';

const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Hero', 'bloom' ),
	description: __( 'Does a thing.', 'bloom' ),
	category,
	icon: 'smiley',
	keywords: [ 'bloom', __( 'tabs', 'bloom' ), __( 'faq', 'bloom' ) ],
	supports: {
		align: true,
		html: false,
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings };
