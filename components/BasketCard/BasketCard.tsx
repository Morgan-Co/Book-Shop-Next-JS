'use client'
import Image from 'next/image'
import NoImage from '@/public/NoImage.png'
import StarRating from '@/utils/StarRating'
import { useEffect, useState } from 'react'
import { Open_Sans } from 'next/font/google'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { Book } from '@/types/type'
import { formatPrice } from '@/utils/formatPrice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	countTotalPrice,
	deleteBookFromBasket,
} from '@/redux/features/books/booksSlice'
const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

const BasketCard = ({ book }: { book: Book }) => {
	const dispatch = useAppDispatch()
	const { books } = useAppSelector(state => state.books)
	const [count, setCount] = useState<number>(1)
	const head = book.volumeInfo.title
	const authors = book.volumeInfo.authors
	const image = book.volumeInfo.imageLinks
		? book.volumeInfo.imageLinks.thumbnail
		: NoImage
	const averageRating = book.volumeInfo.averageRating
	const ratingsCount = book.volumeInfo.ratingsCount
		? `${book.volumeInfo.ratingsCount} reviews`
		: 'no reviews'

	useEffect(() => {
		dispatch(countTotalPrice(count))
	}, [books, dispatch, count])

	const price = formatPrice(book, count)

	const lowerCount = () => {
		if (count === 1) {
			dispatch(deleteBookFromBasket(book.id))
		}
		setCount(count - 1)
	}

	return (
		<div className={`flex items-center`}>
			<div className={`flex gap-x-[25.5px] w-[339px]`}>
				<div className={`shadow-[0px_24px_36px_0px_#35315447]`}>
					<Image src={image} alt={head} width={102.5} height={145} />
				</div>
				<div className={`flex justify-center items-center`}>
					<div className={`max-h-[53px] max-w-[176px]`}>
						<h4
							className={`text-[16px] font-bold text-dark-blue line-clamp-1 overflow-hidden text-ellipsis`}
						>
							{head}
						</h4>
						<h6
							className={`${`text-[10px] leading-[14px] text-gray mb-[4px]`} ${
								openSans.className
							}`}
						>
							{authors}
						</h6>
						<div className={`flex gap-x-[6px]`}>
							<div className={`text-star text-[12px] flex justify-center items-center`}>
								<StarRating rating={averageRating} />
							</div>
							<div className={`text-[10px] leading-[14px] text-gray ${openSans.className}`}>
								{ratingsCount}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`w-[373px]`}>
				<div className={`w-[176px] flex justify-between`}>
					<button className={`w-[28px] h-[28px] bg-none border-none cursor-pointer flex justify-center items-center font-bold`} onClick={lowerCount}>
						<FiMinus className={`w-full h-full`} />
					</button>
					<span className={`flex items-center text-[16px] font-bold leading-[20px]`}>{count}</span>
					<button
						className={`w-[28px] h-[28px] bg-none border-none cursor-pointer flex justify-center items-center font-bold`}
						onClick={() => setCount(count + 1)}
					>
						<FiPlus className={`w-full h-full`} />
					</button>
				</div>
			</div>
			<div className={`text-[18px] font-bold leading-[22px] text-dark-blue w-[285px]`}>{price}</div>
			<div className={`text-[10px] font-bold leading-[12px] text-gray`}>Shipping: delivery</div>
		</div>
	)
}

export default BasketCard
