import { Montserrat } from 'next/font/google'
import styles from '../Inputs.module.scss'
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
			className={`${styles.input} ${montserrat.className} ${
				errors.email && styles.errorInput
			}`}
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
