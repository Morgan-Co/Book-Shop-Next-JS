'use client'
'use strict'
import { Book } from '@/types/type'
import { Montserrat, Open_Sans } from 'next/font/google'
import Image from 'next/image'
import styles from './Card.module.scss'
import Button from '../ui/Button/Button'
import StarRating from '@/utils/StarRating'
import { formatPrice } from '@/utils/formatPrice'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NoImage from '@/public/NoImage.png'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
// import { addBookInBasket } from '@/redux/features/books/booksSlice'

import { useEffect, useState } from 'react'
import {
	addBookInBasket,
	deleteBookFromBasket,
} from '@/redux/features/books/booksSlice'
import { useSession } from 'next-auth/react'
import { togglePopup } from '@/redux/features/popup/popupSlice'
// import { addBookInBasket } from '@/services/getBooks'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })
const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: ['700'],
})

const Card = ({ book }: { book: Book }) => {
	const session = useSession()
	const dispatch = useAppDispatch()
	// const [inCart, setInCart] = useState(false)
	const { books } = useAppSelector(state => state.books)
	// useEffect(() => {
	// 	console.log(books)
	// }, [books])
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
	const InCart = () => {
		if (session.data) {
			if (!books.some(storageBook => storageBook.id === book.id)) {
				return (
					<Button
						func={() => {
							dispatch(addBookInBasket(book))
						}}
					>
						Buy Now
					</Button>
				)
			} else {
				return (
					<button
						onClick={() => {
							dispatch(deleteBookFromBasket(book.id))
						}}
						className={`${styles.inTheCard} ${montserrat.className}`}
						type='button'
					>
						in the card
					</button>
				)
			}
		} else {
			return (
				<Button
					func={() => {
						dispatch(togglePopup())
					}}
				>
					Buy Now
				</Button>
			)
		}
	}

	return (
		<motion.div className={styles.card}>
			<div className={styles.left}>
				<Image src={image} alt={head} width={212} height={300} />
			</div>
			<div className={styles.right}>
				<div className={styles.content}>
					<Link href={''} className={styles.title}>
						<h6 className={`${styles.authors} ${openSans.className}`}>
							{authors}
						</h6>
						<h4 className={styles.head}>{head}</h4>
					</Link>
					<div className={styles.rating}>
						<div className={styles.averageRating}>
							<StarRating rating={averageRating} />
						</div>
						<div className={`${styles.ratingsCount} ${openSans.className}`}>
							{ratingsCount}
						</div>
					</div>
					<p className={`${styles.description} ${openSans.className}`}>
						{description}
					</p>
					<div className={styles.price}>{price}</div>
					{price !== 'no price' ? (
						InCart()
					) : (
						<div className={styles.notForSale}>NOT FOR SALE</div>
					)}
				</div>
			</div>
		</motion.div>
	)
}

export default Card
