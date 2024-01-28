'use client'

import BasketCard from '@/components/BasketCard/BasketCard'
import styles from './page.module.scss'
import { basketParams } from '@/constants'
import Button from '@/components/ui/Button/Button'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'
import { countTotalPrice } from '@/redux/features/books/booksSlice'

export default function ShopBasket() {
	const { books, totalPrice } = useAppSelector(state => state.books)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(countTotalPrice(1))
	}, [books, dispatch])

	return (
		<div>
			<h2 className={styles.title}>Shopping Cart</h2>
			<div className={styles.basketParams}>
				{basketParams.map(param => (
					<div key={param.label} className={styles.basketParam}>
						{param.label}
					</div>
				))}
			</div>
			<div className={styles.booksSection}>
				{books.map(book => (
					<BasketCard key={book.id} book={book} />
				))}
			</div>
			<div className={styles.checkOut}>
				<div className={styles.totalPrice}>Total Price: {totalPrice}</div>
				<Button func={() => {}}>Checkout</Button>
			</div>
		</div>
	)
}
