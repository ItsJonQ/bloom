import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { Section, Content } from '../../components';

export default function Save( { attributes, className, ...props } ) {
	return (
		<Section className={ className } { ...props }>
			<Content>
				<InnerBlocks.Content />
			</Content>
		</Section>
	);
}
