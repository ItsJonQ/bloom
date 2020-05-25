import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { HeroSection, ActionWrapper } from './shared';
import { Section, Container, Row, Col, View } from '../../components';

export default function Edit( {
	attributes,
	className,
	setAttributes,
	...props
} ) {
	return (
		<Section className={ className } { ...props }>
			<Row className="align-items-center">
				<Col className="col-md-6">
					<RichText
						tagName="h1"
						className="display-3 font-weight-bold mt-0 mb-4"
						value={ attributes.title }
						formattingControls={ [] }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __( 'Hero Title' ) }
					/>
					<RichText
						tagName="p"
						className="lead font-weight-normal"
						value={ attributes.description }
						formattingControls={ [ 'bold', 'italic' ] }
						onChange={ ( description ) =>
							setAttributes( { description } )
						}
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
					</ActionWrapper>
				</Col>
				<Col className="col-md-6" />
			</Row>
		</Section>
	);
}
