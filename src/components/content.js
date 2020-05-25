import classnames from 'classnames';
import Container from './container';
import Row from './row';
import Col from './col';

export default function Content( { className, children, ...props } ) {
	const classes = classnames( 'bloom-content', className );

	return (
		<Container { ...props } className={ classes }>
			<Row className="align-items-center">
				<Col className="col-md-8 offset-md-2 bloom-content__body">
					{ children }
				</Col>
			</Row>
		</Container>
	);
}
