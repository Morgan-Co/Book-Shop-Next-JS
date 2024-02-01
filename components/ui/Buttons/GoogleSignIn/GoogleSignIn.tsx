import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'

const GoogleSignIn = ({callbackUrl}: {callbackUrl: string}) => {
	return (
		<button
			onClick={() => signIn('google', { callbackUrl })}
			className={`w-[32px] h-[32px] bg-google-red text-white border-none flex justify-center items-center cursor-pointer transition-colors ease duration-75 hover:bg-[#c23d31]`}
			type='button'
		>
			<FaGoogle />
		</button>
	)
}

export default GoogleSignIn
