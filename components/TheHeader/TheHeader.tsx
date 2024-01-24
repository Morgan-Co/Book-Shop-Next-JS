import styles from './TheHeader.module.scss'
import Logo from '../../public/Logo.svg'
import Image from 'next/image'
import NavLinks from '../NavLinks/NavLinks'
import UserSection from './UserSection/UserSection'

const TheHeader = () => {
	return (
		<div className={styles.header}>
			<div className={`container ${styles.content}`}>
				<a href='/' className={styles.logo}>
					<Image src={Logo} alt='Logo' />
				</a>
				<nav className={styles.navigation}>
					<ul>
						<NavLinks />
					</ul>
				</nav>
				<UserSection />
			</div>
		</div>
	)
}

export default TheHeader
