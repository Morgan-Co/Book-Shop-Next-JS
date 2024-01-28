import { motion } from 'framer-motion'
import styles from './BookInfo.module.scss'
import { Book } from '@/types/type'
import Image from 'next/image'
import NoImage from '@/public/NoImage.png'
import { formatPrice } from '@/utils/formatPrice'
import StarRating from '@/utils/StarRating'
import CardButton from '../Card/CardButton/CardButton'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

const BookInfo = ({ book }: { book: Book }) => {
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
		<motion.div
			onClick={e => e.stopPropagation()}
			layoutId={book.id}
			className={styles.bookInfo}
		>
			<button className={styles.closeButton}>Close</button>
			<div className={styles.left}>
				<Image src={image} alt={head} width={212} height={300} />
			</div>
			<div className={styles.right}>
				<div className={styles.content}>
					<div className={styles.title}>
						<h6 className={`${styles.authors} ${openSans.className}`}>
							{authors}
						</h6>
						<h4 className={styles.head}>{head}</h4>
					</div>
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
					<CardButton book={book} />
				</div>
			</div>
		</motion.div>
	)
}

export default BookInfo
