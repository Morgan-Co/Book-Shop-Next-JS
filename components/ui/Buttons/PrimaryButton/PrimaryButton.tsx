'use client'
import { Montserrat } from 'next/font/google'
import styles from "../Buttons.module.scss"

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['700'],
})

const PrimaryButton = ({ children, func }: { children: string; func: () => void }) => {
	return (
		<button onClick={()=> func()} className={`${styles.primaryButton} ${montserrat.className}`}>
			{children}
		</button>
	)
}

export default PrimaryButton
