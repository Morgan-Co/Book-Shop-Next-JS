'use client'

import Profile from '@/public/Profile.svg'
import Basket from '@/public/Basket.svg'
import { useEffect, useState } from 'react'
import styles from './UserSection.module.scss'
import AuthCard from '@/components/AuthCard/AuthCard'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { togglePopup } from '@/redux/features/popup/popupSlice'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['500'],
})

const UserSection = () => {
	const dispatch = useAppDispatch()
	const { books } = useAppSelector(state => state.books)
	const { isOpen } = useAppSelector(state => state.popup)
	const [isCursorOverPopup, setCursorOverPopup] = useState<boolean>(false)
	const session = useSession()
	useEffect(() => {
		if (!isCursorOverPopup && isOpen) {
			const timeout = setTimeout(() => {
				dispatch(togglePopup())
			}, 2000)

			return () => {
				clearTimeout(timeout)
			}
		}
	}, [isCursorOverPopup, isOpen, dispatch])

	return (
		<div className={styles.userSection}>
			{/* {userSection.map(btn => (
			<button key={btn.label}>
				<Image src={btn.url} alt={btn.url} />
			</button>
		))} */}
			{session.data ? (
				<Link href={'/profile'} className={styles.userButton}>
					<Image src={Profile} alt='Img' />
				</Link>
			) : (
				<button
					className={styles.userButton}
					onClick={() => dispatch(togglePopup())}
					type='button'
				>
					<Image src={Profile} alt='Img' />
				</button>
			)}
			{session.data ? (
				<Link
					href={'/basket'}
					className={`${styles.userButton} ${styles.basketIconBody}`}
				>
					<Image src={Basket} alt='Img' />
					{books.length > 0 && (
						<span className={styles.booksCount}>{books.length}</span>
					)}
				</Link>
			) : (
				<div className={styles.basketIconBody}>
					<button
						type='button'
						onClick={() => dispatch(togglePopup())}
						className={`${styles.userButton} ${montserrat.className}`}
					>
						<Image src={Basket} alt='Img' />
					</button>
				</div>
			)}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, translateY: '50px' }}
						animate={{ opacity: 1, translateY: 0 }}
						exit={{ opacity: 0 }}
						className={styles.authBody}
						onMouseEnter={() => setCursorOverPopup(true)}
						onMouseLeave={() => setCursorOverPopup(false)}
					>
						<AuthCard />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default UserSection
