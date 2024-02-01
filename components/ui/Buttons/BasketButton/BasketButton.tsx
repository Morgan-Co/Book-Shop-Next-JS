import { Session } from 'next-auth'
import Link from 'next/link'
import Basket from '@/public/Basket.svg'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { togglePopup } from '@/redux/features/popup/popupSlice'

const BasketButton = ({ data }: { data: Session | null }) => {
	const dispatch = useAppDispatch()
	const { books } = useAppSelector(state => state.books)

	if (data) {
		return (
			<>
				<Link
					href={'/basket'}
					className={`border-none bg-none cursor-pointer relative`}
				>
					<Image src={Basket} alt='Basket' />
					{books.length > 0 && (
						<span
							className={`absolute top-[9px] left-[5px] w-[13px] h-[13px] bg-red rounded-full text-white text-[10px] leading-[12px] font-medium flex justify-center items-center`}
						>
							{books.length}
						</span>
					)}
				</Link>
			</>
		)
	}
	return (
		<>
			<button
				onClick={() => dispatch(togglePopup())}
				type='button'
				className={`border-none bg-none cursor-pointer`}
			>
				<Image src={Basket} alt='Basket' />
			</button>
		</>
	)
}

export default BasketButton
