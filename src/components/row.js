import View from './view';

export default function Row( props ) {
	return <View cx={ [ 'row' ] } { ...props } />;
}
