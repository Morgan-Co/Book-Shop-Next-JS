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
import { getBooks } from '@/services/getBooks'
import { Book } from '@/types/type'
import Card from '../Card/Card'
import styles from './Products.module.scss'
import { useAppSelector } from '@/redux/hooks'
import { useCallback, useEffect, useState } from 'react'
// import { books } from '@/data/books'
import BookInfo from '../BookInfo/BookInfo'
import { PrimaryButton } from '../ui/Buttons'

const Products = () => {
	const [selectedBook, setSelectedBook] = useState<Book | null>(null)
	const [books, setBooks] = useState([] as Book[])
	const { category } = useAppSelector(state => state.categories)
	const [startIndex, setStartIndex] = useState(0)

	const fetchBooks = useCallback( async () => {
		const { items } = await getBooks(category, startIndex)
		console.log(items)

		if (items) {
			setBooks(prev => [...prev, ...items])
		}
	}, [category, startIndex])

	useEffect(() => {
		fetchBooks()
	}, [fetchBooks])

	return (
		<div className={styles.productsBody}>
			<div className={styles.products}>
				{books.length > 0 &&
					books.map(book => (
						<Card key={book.id} book={book} setSelectedId={setSelectedBook} />
					))}
			</div>
			<div className={styles.loadMore}>
				<PrimaryButton
					func={() => {
						// fetchBooks()
					}}
				>
					Load more
				</PrimaryButton>
			</div>
			{/* {selectedBook && (
				<AnimatePresence>
					<motion.div onClick={()=> setSelectedBook(null)} className={styles.bookInfoBody}>
						<BookInfo book={selectedBook} />
					</motion.div>
				</AnimatePresence>
			)} */}
		</div>
	)
}

export default Products
