'use client'
import { signIn, useSession } from 'next-auth/react'
import styles from './AuthCard.module.scss'
import { FaGoogle } from 'react-icons/fa'
import { Montserrat } from 'next/font/google'
import { useSearchParams } from 'next/navigation'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['700'],
})

const AuthCard = () => {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/profile'
	return (
		<div className={styles.authCard}>
			<div className={styles.content}>
				<h3 className={styles.title}>Log in</h3>
				<form className={styles.form} action=''>
					<label className={styles.label} htmlFor='email'>
						Email
						<input
							className={`${styles.input} ${montserrat.className}`}
							id='email'
							type='email'
						/>
					</label>
					<label className={styles.label} htmlFor='password'>
						Password
						<input
							className={`${styles.input} ${montserrat.className}`}
							id='password'
							type='password'
						/>
					</label>
					<span className={styles.errorMessage}>
						Your password must be at least 6 characters long
					</span>
					<div className={styles.signButtons}>
						<button
							className={`${styles.button} ${montserrat.className}`}
							type='submit'
						>
							Log In
						</button>
						<button
							onClick={() => signIn('google', {callbackUrl})}
							className={styles.googleButton}
							type='button'
						>
							<FaGoogle />
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AuthCard
