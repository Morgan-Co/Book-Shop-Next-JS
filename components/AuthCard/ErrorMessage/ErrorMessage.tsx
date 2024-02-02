import { Inputs } from '@/types/inputs'
import { FieldErrors } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'

const ErrorMessage = ({ errors }: { errors: FieldErrors<Inputs> }) => {
	if (!errors) return
	if (errors.email) {
		return (
			<AnimatePresence>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={`text-red text-[8px] font-bold leading-[10px] mt-[9px] z-0 relative`}
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
					className={`text-red text-[8px] font-bold leading-[10px] mt-[9px] z-0 relative`}
				>
					{errors.password.message}
				</motion.span>
			</AnimatePresence>
		)
	}
}

export default ErrorMessage
