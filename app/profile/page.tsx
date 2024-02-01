import AboutMeCard from '@/components/AboutMeCard/AboutMeCard'
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo'

export default function UserProfile() {
	return (
		<div className={`grid grid-cols-[repeat(2,_minmax(0,_auto))] justify-between pt-[87px]`}>
			<ProfileInfo />
			<AboutMeCard />
		</div>
	)
}
