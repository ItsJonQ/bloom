import { __ } from '@wordpress/i18n';
import { HeroSection, ActionWrapper } from './shared';

export default function Save( { attributes, className } ) {
	const { title, description, primaryActionLabel } = attributes;

	return (
		<HeroSection className={ className }>
			<h1 className="display-3 font-weight-bold mt-0 mb-4">{ title }</h1>

			<p className="lead font-weight-normal">{ description }</p>
			<ActionWrapper>
				<a
					href="#"
					className="btn btn-primary font-weight-bold btn-lg mx-1"
				>
					{ primaryActionLabel }
				</a>
			</ActionWrapper>
		</HeroSection>
	);
}
