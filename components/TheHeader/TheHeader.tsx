'use client'
import Logo from '../../public/Logo.svg'
import Image from 'next/image'
import NavLinks from '../NavLinks/NavLinks'
import UserSection from './UserSection/UserSection'
import { GrClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { GrCatalogOption } from 'react-icons/gr'

const TheHeader = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenCatalog, setIsOpenCatalog] = useState(false)
	const { books } = useAppSelector(state => state.books)
	return (
		<div className={`flex justify-center sm:h-[116px] h-[66px]`}>
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
				<div className={`sm:hidden grid grid-cols-[100px_auto] gap-x-[10px]`}>
					<button
						type='button'
						className={`w-[100px] h-[24px] self-center bg-light-purple text-[12px] font-medium text-white`}
						onClick={() => setIsOpenCatalog(true)}
					>
						<GrCatalogOption className={`text-white inline-block mr-1`} />
						Catalog
					</button>
					<button
						onClick={() => setIsOpen(true)}
						type='button'
						className={`w-[30px] h-[30px] relative`}
					>
						<GiHamburgerMenu className={`w-full h-full`} />
						{books.length > 0 && (
							<span
								className={`block absolute w-[8px] h-[8px] rounded-full bg-red top-[1px] -right-[3px]`}
							></span>
						)}
					</button>
				</div>
				<div
					className={`${
						isOpen ? 'translate-x-0 block' : 'translate-x-[9000px] hidden'
					} sm:hidden block left-0 transition duration-500 ease w-full h-full absolute top-0 bg-white z-20`}
				>
					<nav className={`w-full h-fit mt-[70px] pr-[40px]`}>
						<ul className='flex flex-col gap-y-[40px]'>
							<NavLinks />
						</ul>
					</nav>
					<button
						onClick={() => setIsOpen(false)}
						type='button'
						className={`absolute top-[20px] right-[20px] w-[30px] h-[30px] cursor-pointer`}
					>
						<GrClose className={`w-full h-full`} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default TheHeader
