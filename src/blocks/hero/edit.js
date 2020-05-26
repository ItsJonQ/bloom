import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { HeroSection, cx } from './shared';
import Inspector from './inspector';
import lorem from '../../lorem';

const ALLOWED_BLOCKS = [
	'core/button',
	'core/paragraph',
	'core/heading',
	'core/image',
];

const TEMPLATE = [
	[
		'core/heading',
		{
			align: 'center',
			className: 'display-3',
			placeholder: __( 'Add Hero Section Title', 'bool' ),
			content: lorem.title,
			level: 1,
		},
	],
	[
		'core/paragraph',
		{
			align: 'center',
			placeholder: __( 'Add Hero Section content', 'bool' ),
			content: lorem.description,
		},
	],
];

export default function Edit( props ) {
	const classes = cx( props );

	return (
		<HeroSection { ...props } className={ classes }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				templateLock={ false }
				templateInsertUpdatesSelection={ false }
				renderAppender={ () => null }
			/>
			<Inspector { ...props } />
		</HeroSection>
	);
}
