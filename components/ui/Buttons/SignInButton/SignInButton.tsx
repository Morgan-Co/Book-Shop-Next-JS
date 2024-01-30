import { Montserrat } from 'next/font/google'
import styles from "../Buttons.module.scss"

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['700'],
})

const SignInButton = ({children}: {children: React.ReactNode}) => {
	return (
		<button
			className={`${styles.signInButton} ${montserrat.className}`}
			type='submit'
		>
			{children}
		</button>
	)
}

export default SignInButton
