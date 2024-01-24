'use client'

import styles from './Button.module.scss'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['700'],
})

const Button = ({ children, func }: { children: string; func: () => void }) => {
	return (
		<button onClick={()=> func()} className={`${styles.button} ${montserrat.className}`}>
			{children}
		</button>
	)
}

export default Button
