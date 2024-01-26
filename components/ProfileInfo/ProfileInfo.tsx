'use client'

import Image from 'next/image'
import workingPeople from '@/public/workingPeople.png'
import Button from '@/components/ui/Button/Button'
import { VscSignOut } from 'react-icons/vsc'
import styles from './ProfileInfo.module.scss'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const ProfileInfo = () => {
	const session = useSession()
	
	return (
		<div>
			<h1 className={styles.title}>Profile</h1>
			<div className={styles.content}>
				<Image src={workingPeople} alt='Working People' />
				<div className={styles.profileInfo}>
					<div>
						<h4 className={styles.label}>Your Name</h4>
						<h2>{session?.data?.user?.name}</h2>
					</div>
					<div>
						<h4 className={styles.label}>Your Email</h4>
						<h2>{session?.data?.user?.email}</h2>
					</div>
					<Button func={()=> {}}>Edit Profile</Button>
				</div>
			</div>
			<div className={styles.signOut}>
				<Link href='/' onClick={() => signOut({ callbackUrl: '/' })}>
					<VscSignOut /> Sing Out
				</Link>
			</div>
		</div>
	)
}

export default ProfileInfo