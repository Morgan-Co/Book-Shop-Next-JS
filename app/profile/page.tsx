import AboutMeCard from '@/components/AboutMeCard/AboutMeCard'
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo'
import styles from "./page.module.scss"

export default function UserProfile() {
	return (
		<div className={styles.userProfile}>
			<ProfileInfo />
			<AboutMeCard />
		</div>
	)
}
