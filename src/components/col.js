import View from './view';

export default function Col( props ) {
	return <View cx={ [ 'col' ] } { ...props } />;
}
