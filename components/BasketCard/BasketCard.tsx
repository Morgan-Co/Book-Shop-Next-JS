'use client'
import Image from 'next/image'
import NoImage from '@/public/NoImage.png'
import StarRating from '@/utils/StarRating'
import { useEffect, useState } from 'react'
import styles from './BasketCard.module.scss'
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
		<div className={styles.basketCard}>
			<div className={styles.bookInfo}>
				<div className={styles.left}>
					<Image src={image} alt={head} width={102.5} height={145} />
				</div>
				<div className={styles.right}>
					<div className={styles.content}>
						<h4 className={styles.title}>{head}</h4>
						<h6 className={`${styles.authors} ${openSans.className}`}>
							{authors}
						</h6>
						<div className={styles.rating}>
							<div className={styles.averageRating}>
								<StarRating rating={averageRating} />
							</div>
							<div className={`${styles.ratingsCount} ${openSans.className}`}>
								{ratingsCount}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.quantityBody}>
				<div className={styles.productCount}>
					<button className={styles.quantityButton} onClick={lowerCount}>
						<FiMinus />
					</button>
					<span className={styles.quantity}>{count}</span>
					<button
						className={styles.quantityButton}
						onClick={() => setCount(count + 1)}
					>
						<FiPlus />
					</button>
				</div>
			</div>
			<div className={styles.price}>{price}</div>
			<div className={styles.delivery}>Shipping: delivery</div>
		</div>
	)
}

export default BasketCard
