'use client'

import BasketCard from '@/components/BasketCard/BasketCard'
import { basketParams } from '@/constants'
import { PrimaryButton } from '@/components/ui/Buttons'
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
			<h2
				className={`text-[24px] font-bold leading-[29px] text-dark-blue uppercase`}
			>
				Shopping Cart
			</h2>
			<div className={`flex justify-between max-w-[1050px]`}>
				{basketParams.map(param => (
					<div
						key={param.label}
						className={`text-[10px] font-bold leading-[12px] text-gray uppercase`}
					>
						{param.label}
					</div>
				))}
			</div>
			<div className={`flex flex-col gap-y-[30px] mt-[30px] mb-[100px]`}>
				{books.map(book => (
					<BasketCard key={book.id} book={book} />
				))}
			</div>
			<div className={`block`}>
				<div
					className={`text-[24px] font-bold leading-[29px] text-dark-blue uppercase`}
				>
					Total Price: {totalPrice}
				</div>
				<PrimaryButton func={() => {}}>Checkout</PrimaryButton>
			</div>
		</div>
	)
}
