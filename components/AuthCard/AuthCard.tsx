'use client'
import { signIn, useSession } from 'next-auth/react'
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
		<div
			className={`w-[241px] h-[312px] flex justify-center shadow-[0px_4px_4px_0px_#00000040] bg-white`}
		>
			<div className={`h-[250px] relative mt-[7px]`}>
				<h3
					className={`text-[16px] font-bold leading-[20px] text-dark-blue text-center mb-[14px]`}
				>
					Log in
				</h3>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={`flex flex-col items-center`}
				>
					<label
						className={`text-[12px] font-bold leading-[15px] text-black cursor-pointer mx-auto mt-[15px] block`}
						htmlFor='email'
					>
						Email
						<EmailInput errors={errors} register={register} />
					</label>
					<label
						className={`text-[12px] font-bold leading-[15px] text-black cursor-pointer mx-auto mt-[15px] block`}
						htmlFor='password'
					>
						Password
						<PasswordInput errors={errors} register={register} />
					</label>
					<ErrorMessage errors={errors} />
					<div
						className={`flex justify-between max-w-[176px] w-full absolute bottom-0`}
					>
						<SignInButton>Log In</SignInButton>
						<GoogleSignIn callbackUrl={callbackUrl} />
					</div>
				</form>
			</div>
		</div>
	)
}

export default AuthCard
