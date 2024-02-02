'use client'
import { getBooks } from '@/services/getBooks'
import { Book } from '@/types/type'
import Card from '../Card/Card'
import { useAppSelector } from '@/redux/hooks'
import { useEffect, useState } from 'react'
import { PrimaryButton } from '../ui/Buttons'

const Products = () => {
	const [books, setBooks] = useState([] as Book[])
	const { category } = useAppSelector(state => state.categories)
	const [startIndex, setStartIndex] = useState(6)

	useEffect(() => {
		const fetchBooks = async () => {
			const { items } = await getBooks(category, 6)
			setBooks(items)
		}
		fetchBooks()
	}, [category])


	return (
		<div className={`z-[4]`}>
			<div
				className={`flex flex-wrap justify-between gap-y-[96px] gap-x-[35px] max-w-[924px]`}
			>
				{books.length > 0 &&
					books.map(book => <Card key={book.id} book={book} />)}
			</div>
			<div className={`flex justify-center mt-[96px]`}>
				<PrimaryButton
					func={async () => {
						const { items } = await getBooks(category, startIndex)
						setBooks(prev => [...prev, ...items])
						setStartIndex(prev => prev + 6)
					}}
				>
					Load more
				</PrimaryButton>
			</div>
		</div>
	)
}

export default Products
