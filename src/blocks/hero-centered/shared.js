import { Section, Container, Row, Col, View } from '../../components';

export function HeroSection( { children } ) {
	return (
		<Section>
			<Container>
				<Row>
					<Col className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
						<Container>
							<Row>
								<Col className="col-xl-10 offset-xl-1">
									{ children }
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</Section>
	);
}

export function ActionWrapper( { children } ) {
	return (
		<View className="d-flex justify-content-center pt-4">{ children }</View>
	);
}
