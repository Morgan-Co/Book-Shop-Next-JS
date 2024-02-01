'use client'
const PrimaryButton = ({
	children,
	func,
}: {
	children: string
	func: () => void
}) => {
	return (
		<button
			onClick={() => func()}
			className={`w-[176px] h-[45px] bg-transparent text-primary-purple text-[8px] font-bold uppercase border-primary-purple border-[1px] border-solid hover:bg-[#dfdfdf] active:bg-[#b8b8b8]`}
		>
			{children}
		</button>
	)
}

export default PrimaryButton
