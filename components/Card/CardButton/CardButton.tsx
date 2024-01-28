import Button from '@/components/ui/Button/Button'
import { addBookInBasket, deleteBookFromBasket } from '@/redux/features/books/booksSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Book } from '@/types/type'
import { useSession } from 'next-auth/react'
import { Montserrat } from 'next/font/google'
import React from 'react'
import styles from "./CardButton.module.scss"
import { togglePopup } from '@/redux/features/popup/popupSlice'
import { formatPrice } from '@/utils/formatPrice'

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: ['700'],
})

const CardButton = ({book}: {book: Book}) => {
	const session = useSession()
	const dispatch = useAppDispatch()
	const price = formatPrice(book)
	const { books } = useAppSelector(state => state.books)
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
		<>
			{price !== 'no price' ? (
				InCart()
			) : (
				<div className={styles.notForSale}>NOT FOR SALE</div>
			)}
		</>
	)
}

export default CardButton
