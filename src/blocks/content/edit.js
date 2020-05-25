import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';
import { Content } from '../../components';

export default function Edit( props ) {
	const { attributes, className } = props;
	const style = { backgroundColor: attributes.backgroundColor };

	return (
		<div style={ style }>
			<Content className={ className }>
				<InnerBlocks />
				<Inspector { ...props } />
			</Content>
		</div>
	);
}
