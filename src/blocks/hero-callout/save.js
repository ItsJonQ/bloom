import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { Section, Content } from '../../components';

export default function Save( { attributes } ) {
	const { title, description } = attributes;

	return (
		<Section>
			<Content>
				<h1 className="display-3 font-weight-bold mt-0 mb-2">
					{ title }
				</h1>

				<p className="lead font-weight-normal mb-4">{ description }</p>

				<InnerBlocks.Content />
			</Content>
		</Section>
	);
}
