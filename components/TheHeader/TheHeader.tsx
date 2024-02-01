'use client'

import Logo from '../../public/Logo.svg'
import Image from 'next/image'
import NavLinks from '../NavLinks/NavLinks'
import UserSection from './UserSection/UserSection'
import { IoClose } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { useAppSelector } from '@/redux/hooks'

const TheHeader = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { books } = useAppSelector(state => state.books)
	return (
		<div className='flex justify-center h-[116px]'>
			<div className={`container flex justify-between items-center gap-[20px]`}>
				<a href='/' className='flex'>
					<Image src={Logo} alt='Logo' />
				</a>
				<nav className='sm:block max-w-[372px] w-full hidden'>
					<ul className='flex justify-between'>
						<NavLinks />
					</ul>
				</nav>
				<div className='sm:block hidden'>
					<UserSection />
				</div>

				<button
					onClick={() => setIsOpen(true)}
					type='button'
					className={`sm:hidden w-[30px] h-[30px] relative`}
				>
					<GiHamburgerMenu className={`w-full h-full`} />
					{books.length > 0 && (
						<span
							className={`block absolute w-[8px] h-[8px] rounded-full bg-red top-[1px] -right-[3px]`}
						></span>
					)}
				</button>
				<div
					className={`${
						isOpen ? 'translate-x-0' : 'translate-x-[9000px]'
					} sm:hidden left-0 transition duration-500 ease w-full h-full absolute top-0 bg-white z-20`}
				>
					<nav className={`w-full h-fit mt-[70px] pr-[40px]`}>
						<ul className='flex flex-col gap-y-[40px]'>
							<NavLinks />
						</ul>
					</nav>
					<div className={`h-fit`}>
						<UserSection />
					</div>
					<button
						onClick={() => setIsOpen(false)}
						type='button'
						className={`absolute top-[10px] right-[7px] w-[30px] h-[30px] cursor-pointer`}
					>
						<IoClose className={`w-full h-full`} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default TheHeader
