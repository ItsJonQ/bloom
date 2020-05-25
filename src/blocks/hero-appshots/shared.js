import { Section, Container, Row, Col, View } from '../../components';

export function HeroSection( { children } ) {
	return (
		<Section>
			<Container>
				<Row>
					<Col className="col-md-6">{ children }</Col>
				</Row>
			</Container>
		</Section>
	);
}

export function ActionWrapper( { children } ) {
	return (
		<View className="d-flex justify-content-start pt-2">{ children }</View>
	);
}
