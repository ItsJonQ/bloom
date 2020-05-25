import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

export default function Inspector( { attributes, setAttributes } ) {
	const { backgroundColor } = attributes;

	const handleOnChange = ( event ) => {
		setAttributes( { backgroundColor: event.target.value } );
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Background', 'coblocks' ) }>
				<input
					type="color"
					value={ backgroundColor }
					onChange={ handleOnChange }
				/>
			</PanelBody>
		</InspectorControls>
	);
}
