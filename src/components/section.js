import classnames from 'classnames';
import Container from './container';
import View from './view';

export default function Section( { children, ...props } ) {
	return (
		<View cx={ [ 'blmco-section' ] } { ...props }>
			<Container>{ children }</Container>
		</View>
	);
}
