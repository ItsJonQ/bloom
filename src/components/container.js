import View from './view';

export default function Container( props ) {
	return <View cx={ [ 'container' ] } { ...props } />;
}
