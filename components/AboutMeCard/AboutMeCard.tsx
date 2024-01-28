import { Montserrat } from 'next/font/google'
import styles from './AboutMeCard.module.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['600'],
})

const AboutMeCard = () => {
	return (
		<div className={styles.aboutMe}>
			<h3 className={styles.aboutMeTitle}>About Me</h3>
			<form action='#' className={styles.form}>
				<textarea className={`${styles.textarea} ${montserrat.className}`} />
			</form>
		</div>
	)
}

export default AboutMeCard
