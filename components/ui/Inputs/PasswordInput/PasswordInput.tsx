import { Montserrat } from 'next/font/google'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Inputs } from '@/types/inputs'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['700'],
})

const PasswordInput = ({
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
			id='password'
			type='password'
			{...register('password', {
				required: 'Enter your password',
				minLength: {
					value: 6,
					message: 'Your password must be at least 6 characters long',
				},
			})}
		/>
	)
}

export default PasswordInput
