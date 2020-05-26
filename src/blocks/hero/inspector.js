import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';

export default function Inspector( { attributes, setAttributes } ) {
	const { contentAlign, isShaded, theme } = attributes;
	const isDark = theme === 'dark';

	const handleOnChangeTheme = () => {
		setAttributes( { theme: isDark ? 'light' : 'dark' } );
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Background', 'bloom' ) }>
				<ToggleControl
					label="Dark"
					checked={ isDark }
					onChange={ () => {
						setAttributes( { theme: isDark ? 'light' : 'dark' } );
					} }
				/>{ ' ' }
				<ToggleControl
					label="Shaded"
					checked={ isShaded }
					onChange={ () => {
						setAttributes( { isShaded: ! isShaded } );
					} }
				/>
				<SelectControl
					label="Align"
					options={ [
						{ value: 'left', label: 'Left' },
						{ value: 'center', label: 'Center' },
						{ value: 'right', label: 'Right' },
					] }
					value={ contentAlign }
					onChange={ ( next ) =>
						setAttributes( { contentAlign: next } )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
}
