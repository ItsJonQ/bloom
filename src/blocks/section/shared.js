import { Section, Container, Row, Col, View } from '../../components';

export function HeroSection( { children } ) {
	return (
		<Section>
			<Row>
				<Col className="col-md-6">{ children }</Col>
			</Row>
		</Section>
	);
}

export function ActionWrapper( { children } ) {
	return (
		<View className="d-flex justify-content-start pt-4">{ children }</View>
	);
}
