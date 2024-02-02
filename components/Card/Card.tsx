'use client'

import { Book } from '@/types/type'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import StarRating from '@/utils/StarRating'
import { formatPrice } from '@/utils/formatPrice'
import NoImage from '@/public/NoImage.png'
import CardButton from './CardButton/CardButton'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

const Card = ({ book }: { book: Book }) => {
	const image = book.volumeInfo.imageLinks
		? book.volumeInfo.imageLinks.thumbnail
		: NoImage
	const head = book.volumeInfo.title
	const description = book.volumeInfo.description || 'no description'
	const authors = book.volumeInfo.authors
		? book.volumeInfo.authors[0]
		: 'no authors'

	const averageRating = book.volumeInfo.averageRating
	const ratingsCount = book.volumeInfo.ratingsCount
		? `${book.volumeInfo.ratingsCount} reviews`
		: 'no reviews'

	const price = formatPrice(book)

	return (
		<div className={`grid grid-cols-2 max-w-[424px] w-full h-[300px] bg-white`}>
			<div className={`shadow-[0px_24px_36px_0px_#35315447;]`}>
				<Image src={image} alt={head} width={212} height={300} />
			</div>
			<div className={`flex justify-end items-center w-full`}>
				<div
					className={`flex flex-col justify-between max-w-[176px] min-h-[203px]`}
				>
					<div
						className={`flex flex-col justify-between bg-none cursor-pointer`}
					>
						<h6
							className={`text-[10px] leading-[14px] text-gray mb-[4px] text-start ${openSans.className}`}
						>
							{authors}
						</h6>
						<h4 className={`text-[16px] leading-[20px] font-bold text-dark-blue line-clamp-1 overflow-hidden text-ellipsis transition-colors duration-100 ease text-start`}>{head}</h4>
					</div>
					<div className={`flex gap-x-[6px]`}>
						<div className={`text-star text-[12px] flex justify-center items-center`}>
							<StarRating rating={averageRating} />
						</div>
						<div className={`text-[10px] leading-[14px] text-gray ${openSans.className}`}>
							{ratingsCount}
						</div>
					</div>
					<p className={`text-[10px] leading-[14px] text-gray capitalize line-clamp-3 overflow-hidden text-ellipsis ${openSans.className}`}>
						{description}
					</p>
					<div className={`text-[13px] font-bold leading-[16px] text-dark-blue`}>{price}</div>
					<CardButton book={book} />
				</div>
			</div>
		</div>
	)
}

export default Card
