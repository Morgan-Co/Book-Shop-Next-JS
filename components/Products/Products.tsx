// 'use client'
import { getAllBooks } from '@/services/getBooks'
import { Book } from '@/types/type'
import Card from '../Card/Card'
import styles from './Products.module.scss'
// import Button from '../ui/Button/Button'

const Products = async () => {
	// const [books, setBooks] = useState([] as Book[])
	// const { category } = useAppSelector(state => state.books)
	// const [startIndex, setStartIndex] = useState(6)

	const {
		data: { items },
	}: { data: { items: Book[] } } = await getAllBooks()

	return (
		<div className={styles.productsBody}>
			<div className={styles.products}>
				{items.map(book => (
					<Card key={book.id} book={book} />
				))}
			</div>
			<div className={styles.loadMore}>
				{/* <Button func={() => {}}>Load more</Button> */}
			</div>
		</div>
	)
}

export default Products
