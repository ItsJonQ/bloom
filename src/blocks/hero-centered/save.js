import { __ } from '@wordpress/i18n';
import { HeroSection, ActionWrapper } from './shared';

export default function Save( { attributes, className } ) {
	const {
		title,
		description,
		primaryActionLabel,
		secondaryActionLabel,
	} = attributes;

	return (
		<HeroSection>
			<h1 className="display-3 font-weight-bold text-center mt-0 mb-2">
				{ attributes.title }
			</h1>

			<p className="text-center lead font-weight-normal mb-0">
				{ description }
			</p>
			<ActionWrapper>
				<a
					href="#"
					className="btn btn-primary font-weight-bold btn-lg mx-1"
				>
					{ primaryActionLabel }
				</a>
				<a
					href="#"
					className="btn btn-outline-dark font-weight-bold btn-lg mx-1"
				>
					{ secondaryActionLabel }
				</a>
			</ActionWrapper>
		</HeroSection>
	);
}
