import View from './view';

export default function Section( { children, ...props } ) {
	return (
		<View cx={ [ 'bloom-section' ] } { ...props }>
			{ children }
		</View>
	);
}
