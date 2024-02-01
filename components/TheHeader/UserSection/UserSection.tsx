'use client'
import { useEffect, useState } from 'react'
import AuthCard from '@/components/AuthCard/AuthCard'
import { AnimatePresence, motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { togglePopup } from '@/redux/features/popup/popupSlice'
import { BasketButton, ProfileButton } from '@/components/ui/Buttons'

const UserSection = () => {
	const dispatch = useAppDispatch()
	const { isOpen } = useAppSelector(state => state.popup)
	const [isCursorOverPopup, setCursorOverPopup] = useState<boolean>(false)
	const session = useSession()
	// useEffect(() => {
	// 	if (!isCursorOverPopup && isOpen) {
	// 		const timeout = setTimeout(() => {
	// 			dispatch(togglePopup())
	// 		}, 2000)

	// 		return () => {
	// 			clearTimeout(timeout)
	// 		}
	// 	}
	// }, [isCursorOverPopup, isOpen, dispatch])

	return (
		<div className={`flex w-[121px] justify-between relative`}>
			<ProfileButton data={session.data} />
			<BasketButton data={session.data} />
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, translateY: '50px' }}
						animate={{ opacity: 1, translateY: 0 }}
						exit={{ opacity: 0 }}
						className='absolute top-[35px] -left-[115px] z-[2]'
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
