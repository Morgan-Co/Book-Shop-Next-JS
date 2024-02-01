import { togglePopup } from '@/redux/features/popup/popupSlice'
import { useAppDispatch } from '@/redux/hooks'
import { Session } from 'next-auth'
import Link from 'next/link'
import Profile from '@/public/Profile.svg'
import Image from 'next/image'

const ProfileButton = ({ data }: { data: Session | null }) => {
	const dispatch = useAppDispatch()

	if (data) {
		return (
			<>
				<Link
					href={'/profile'}
					className={`border-none bg-none cursor-pointer`}
				>
					<Image src={Profile} alt='Profile' />
				</Link>
			</>
		)
	}
	return (
		<>
			<button
				onClick={() => dispatch(togglePopup())}
				type='button'
				className={`border-none bg-none cursor-pointer`}
			>
				<Image src={Profile} alt='Profile' />
			</button>
		</>
	)
}

export default ProfileButton
