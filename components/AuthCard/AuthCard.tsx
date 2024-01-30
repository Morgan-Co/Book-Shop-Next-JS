'use client'
import styles from './AuthCard.module.scss'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { EmailInput, PasswordInput } from '../ui/Inputs'
import { Inputs } from '@/types/inputs'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import { GoogleSignIn, SignInButton } from '../ui/Buttons'

const AuthCard = () => {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/profile'
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ mode: 'onBlur' })

	const onSubmit: SubmitHandler<Inputs> = async data => {
		const res = await signIn('credentials', {
			email: data.email,
			password: data.password,
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
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<label className={styles.label} htmlFor='email'>
						Email
						<EmailInput errors={errors} register={register} />
					</label>
					<label className={styles.label} htmlFor='password'>
						Password
						<PasswordInput errors={errors} register={register} />
					</label>
					<ErrorMessage errors={errors} />
					<div className={styles.signButtons}>
						<SignInButton>Log In</SignInButton>
						<GoogleSignIn callbackUrl={callbackUrl} />
					</div>
				</form>
			</div>
		</div>
	)
}

export default AuthCard
