'use client'

import Image from 'next/image'
import workingPeople from '@/public/workingPeople.png'
import { VscSignOut } from 'react-icons/vsc'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { PrimaryButton } from '../ui/Buttons'
import { styles } from '@/app/style'

const ProfileInfo = () => {
	const session = useSession()

	return (
		<div className={`grid grid-rows-[repeat(3,_minmax(0,_auto))] self-start`}>
			<h1 className={`${styles.title}`}>Profile</h1>
			<div className='inline-flex gap-x-[17px]'>
				<Image src={workingPeople} alt='Working People' />
				<div className='flex flex-col justify-between max-h-[215px]'>
					<div>
						<h4 className='text-[12px] font-bold leading-[15px] text-black mb-[8px]'>
							Your Name
						</h4>
						<h2>{session?.data?.user?.name}</h2>
					</div>
					<div>
						<h4 className='text-[12px] font-bold leading-[15px] text-black mb-[8px]'>
							Your Email
						</h4>
						<h2>{session?.data?.user?.email}</h2>
					</div>
					<PrimaryButton func={() => {}}>Edit Profile</PrimaryButton>
				</div>
			</div>
			<div className='w-fit h-fit'>
				<Link
					href='/'
					onClick={() => signOut({ callbackUrl: '/' })}
					className='font-bold text-dark-blue flex justify-center items-center gap-x-[10px] hover:text-[#181a1d]'
				>
					<VscSignOut className='w-[20px] h-[20px]' /> Sing Out
				</Link>
			</div>
		</div>
	)
}

export default ProfileInfo
