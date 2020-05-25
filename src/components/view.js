import classnames from 'classnames';

export default function View( { as = 'div', className, cx = [], ...props } ) {
	const Component = as;
	const classes = classnames( 'bloom', classnames( cx ), className );
	console.log( classes );

	return <Component { ...props } className={ classes } />;
}
