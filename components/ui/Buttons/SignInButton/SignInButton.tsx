const SignInButton = ({children}: {children: React.ReactNode}) => {
	return (
		<button
			className={`w-[130px] h-[32px] bg-light-purple text-[14px] leading-[17px] border-none uppercase text-white cursor-pointer transition-colors duration-75 ease font-bold hover:bg-[#8682bb]`}
			type='submit'
		>
			{children}
		</button>
	)
}

export default SignInButton
