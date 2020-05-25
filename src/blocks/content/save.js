import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { Content } from '../../components';

export default function Save( { attributes, className, ...props } ) {
	const style = { backgroundColor: attributes.backgroundColor };

	return (
		<div style={ style }>
			<Content className={ className }>
				<InnerBlocks.Content />
			</Content>
		</div>
	);
}
