import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { Section, Content } from '../../components';

export default function Edit( {
	attributes,
	className,
	setAttributes,
	...props
} ) {
	return (
		<Section className={ className } { ...props }>
			<Content>
				<RichText
					tagName="h1"
					className="display-2 font-weight-bold mt-0 mb-4"
					value={ attributes.title }
					formattingControls={ [] }
					onChange={ ( title ) => setAttributes( { title } ) }
					placeholder={ __( 'Hero Title' ) }
				/>
				<RichText
					tagName="p"
					className="lead-lg font-weight-normal mb-5"
					value={ attributes.description }
					formattingControls={ [ 'bold', 'italic' ] }
					onChange={ ( description ) =>
						setAttributes( { description } )
					}
					placeholder={ __( 'Description' ) }
				/>
				<InnerBlocks />
			</Content>
		</Section>
	);
}
