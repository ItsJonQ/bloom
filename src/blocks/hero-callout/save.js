import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { Section, Content } from '../../components';

export default function Save( { attributes, className } ) {
	const { title, description } = attributes;

	return (
		<Section className={ className }>
			<Content>
				<h1 className="display-3 font-weight-bold mt-0 mb-4">
					{ title }
				</h1>

				<p className="lead font-weight-normal mb-5">{ description }</p>

				<InnerBlocks.Content />
			</Content>
		</Section>
	);
}
