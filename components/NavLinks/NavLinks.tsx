'use client'

import { navLinks } from '@/constants'
import { NavLink } from '@/constants/type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
	const pathname = usePathname()

	return (
		<>
			{navLinks.map(link => (
				<li
					key={link.title}
					className='sm:text-[10px] text-[20px] font-extrabold uppercase flex items-center sm:justify-center justify-end'
				>
					<Link
						href={link.href}
						style={{
							color: `${pathname === link.href ? '#1C2A39' : '#5C6A79'}`,
						}}
					>
						{link.title}
					</Link>
				</li>
			))}
		</>
	)
}

export default NavLinks
