// // 'use client'
// import { getAllBooks } from '@/services/getBooks'
// import { Book } from '@/types/type'
// import Card from '../Card/Card'
// import styles from './Products.module.scss'
// import { useAppSelector } from '@/redux/hooks'
// // import Button from '../ui/Button/Button'

// const Products = async () => {
// 	// const [books, setBooks] = useState([] as Book[])
// 	// const { category } = useAppSelector(state => state.books)
// 	// const [startIndex, setStartIndex] = useState(6)
// 	const {
// 		data: { items },
// 	}: { data: { items: Book[] } } = await getAllBooks()

// 	return (
// 		<div className={styles.productsBody}>
// 			<div className={styles.products}>
// 				{items.map(book => (
// 					<Card key={book.id} book={book} />
// 				))}
// 			</div>
// 			<div className={styles.loadMore}>
// 				{/* <Button func={() => {}}>Load more</Button> */}
// 			</div>
// 		</div>
// 	)
// }

// export default Products

'use client'
import { getAllBooks, getBooksWithCategory } from '@/services/getBooks'
import { Book } from '@/types/type'
import Card from '../Card/Card'
import styles from './Products.module.scss'
import { useAppSelector } from '@/redux/hooks'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Button from '../ui/Button/Button'

const Products = () => {
	const [books, setBooks] = useState([] as Book[])
	const { category } = useAppSelector(state => state.categories)
	const [startIndex, setStartIndex] = useState(0)

	const fetchBooks = async () => {
		const { items } = await getBooksWithCategory(category, 6)
		console.log(items)

		if (items) {
			setBooks(prev => [...prev, ...items])
		}
	}

	useEffect(() => {
		fetchBooks()
	}, [])

	// const fetchBooks = useCallback( async () => {
	// 	const data = await getBooksWithCategory(category, startIndex)
	// 	console.log(data)

	// 	if (data.items && books.length) {
	// 		setBooks(prev => [...prev, ...data.items])
	// 		return
	// 	}
	// 	setBooks(data.items)
	// 	setStartIndex(startIndex + 6)
	// }, [])

	// useEffect(() => {
	// 	fetchBooks()
	// }, [])

	return (
		<div className={styles.productsBody}>
			<div className={styles.products}>
				{books.length > 0 &&
					books.map(book => <Card key={book.id} book={book} />)}
			</div>
			<div className={styles.loadMore}>
				<Button
					func={() => {
						fetchBooks()
						// console.log(books)
					}}
				>
					Load more
				</Button>
			</div>
		</div>
	)
}

export default Products
