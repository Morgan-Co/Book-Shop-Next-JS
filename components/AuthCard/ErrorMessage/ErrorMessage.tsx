import { Inputs } from '@/types/inputs'
import { FieldErrors } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './ErrorMessage.module.scss'

const ErrorMessage = ({ errors }: { errors: FieldErrors<Inputs> }) => {
	if (!errors) return
	if (errors.email) {
		return (
			<AnimatePresence>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={styles.errorMessage}
				>
					{errors.email.message}
				</motion.span>
			</AnimatePresence>
		)
	}
	if (errors.password) {
		return (
			<AnimatePresence>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={styles.errorMessage}
				>
					{errors.password.message}
				</motion.span>
			</AnimatePresence>
		)
	}
}

export default ErrorMessage
