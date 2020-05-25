import classnames from 'classnames';

export default function View( { as = 'div', className, cx = [], ...props } ) {
	const Component = as;
	const classes = classnames( 'blmco', classnames( cx ), className );

	return <Component className={ classes } { ...props } />;
}
