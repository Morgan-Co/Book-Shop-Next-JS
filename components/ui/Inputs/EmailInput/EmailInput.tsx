import { Montserrat } from 'next/font/google'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Inputs } from '@/types/inputs'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['700'],
})

const EmailInput = ({
	errors,
	register,
}: {
	errors: FieldErrors<Inputs>
	register: UseFormRegister<Inputs>
}) => {
	return (
		<input
			className={`block py-[10px] px-[9px] w-[176px] border-solid border border-primary-purple text-[12px] font-bold leading-[15px] text-primary-purple box-border mt-[9px] z-[5] relative ${
				montserrat.className
			} ${errors.email && 'border-solid border border-red text-red'}`}
			id='email'
			type='email'
			{...register('email', {
				required: 'Enter your email address',
				pattern: {
					value:
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					message: 'Enter the correct email address',
				},
			})}
		/>
	)
}

export default EmailInput
