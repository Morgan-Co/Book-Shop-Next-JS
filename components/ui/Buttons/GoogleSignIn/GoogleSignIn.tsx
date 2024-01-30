import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'
import styles from "../Buttons.module.scss"

const GoogleSignIn = ({callbackUrl}: {callbackUrl: string}) => {
	return (
		<button
			onClick={() => signIn('google', { callbackUrl })}
			className={styles.googleButton}
			type='button'
		>
			<FaGoogle />
		</button>
	)
}

export default GoogleSignIn
