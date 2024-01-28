'use client'
import { signIn } from 'next-auth/react'
import styles from './AuthCard.module.scss'
import { FaGoogle } from 'react-icons/fa'
import { Montserrat } from 'next/font/google'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEventHandler } from 'react'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['700'],
})

const AuthCard = () => {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/profile'
	const router = useRouter()
	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const res = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false,
		})
		if (res && !res.error) {
			router.push('/profile')
		} else {
			console.log(res)
		}
	}
	return (
		<div className={styles.authCard}>
			<div className={styles.content}>
				<h3 className={styles.title}>Log in</h3>
				<form onSubmit={handleSubmit} className={styles.form} action=''>
					<label className={styles.label} htmlFor='email'>
						Email
						<input
							className={`${styles.input} ${montserrat.className}`}
							id='email'
							type='email'
							name='email'
						/>
					</label>
					<label className={styles.label} htmlFor='password'>
						Password
						<input
							className={`${styles.input} ${montserrat.className}`}
							id='password'
							type='password'
							name='password'
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
							onClick={() => signIn('google', { callbackUrl })}
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
