import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { HeroSection, cx } from './shared';

export default function Save( props ) {
	const classes = cx( props );

	return (
		<HeroSection className={ classes }>
			<InnerBlocks.Content />
		</HeroSection>
	);
}
