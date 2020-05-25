import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { HeroSection, ActionWrapper, cx } from './shared';
import Inspector from './inspector';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const classes = cx( props );

	return (
		<HeroSection { ...props } className={ classes }>
			<RichText
				tagName="h1"
				className="display-3 font-weight-bold text-center mt-0 mb-2"
				value={ attributes.title }
				formattingControls={ [] }
				onChange={ ( title ) => setAttributes( { title } ) }
				placeholder={ __( 'Hero Title' ) }
			/>
			<RichText
				tagName="p"
				className="text-center lead font-weight-normal mb-0"
				value={ attributes.description }
				formattingControls={ [ 'bold', 'italic' ] }
				onChange={ ( description ) => setAttributes( { description } ) }
				placeholder={ __( 'Description' ) }
			/>
			<ActionWrapper>
				<RichText
					tagName="div"
					className="btn btn-primary font-weight-bold btn-lg mx-1"
					value={ attributes.primaryActionLabel }
					formattingControls={ [] }
					onChange={ ( primaryActionLabel ) =>
						setAttributes( { primaryActionLabel } )
					}
					placeholder={ __( 'Get Started' ) }
				/>
				<RichText
					tagName="div"
					className="btn btn-outline-dark font-weight-bold btn-lg mx-1"
					value={ attributes.secondaryActionLabel }
					formattingControls={ [] }
					onChange={ ( secondaryActionLabel ) =>
						setAttributes( { secondaryActionLabel } )
					}
					placeholder={ __( 'Get Started' ) }
				/>
			</ActionWrapper>
			<Inspector { ...props } />
		</HeroSection>
	);
}
