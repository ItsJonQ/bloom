import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { Content } from '../../components';

export default function Save( { attributes, className, ...props } ) {
	return (
		<Content className={ className } { ...props }>
			<InnerBlocks.Content />
		</Content>
	);
}
