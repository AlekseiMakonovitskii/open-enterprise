
import styles from './Nav.module.scss';

const Nav = ({style, handleCloseClick}) => {
	const elements = [
		{
			title: 'Why Open Enterprise',
			link: '#whysection',
		},
		{
			title: 'Features',
			link: '#features',
		},
		{
			title: 'Contribute',
			link: '#contribute',
		},
		{
			title: 'Request early access',
			link: '#request',
		}
	];

	return (
		<nav className={`${styles.nav} ${styles[style]}`}>
			<ul>
				{elements.map(el => <li key={el.title}><a href={el.link} onClick={() => handleCloseClick()}>{el.title}</a></li>)}
			</ul>
		</nav>
	)
}

export default Nav