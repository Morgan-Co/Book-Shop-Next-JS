import { Montserrat } from 'next/font/google'
import styles from '../Inputs.module.scss'
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
			className={`${styles.input} ${montserrat.className} ${
				errors.password && styles.errorInput
			}`}
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
