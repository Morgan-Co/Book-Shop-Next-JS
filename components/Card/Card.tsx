import { Book } from '@/types/type'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import styles from './Card.module.scss'
import StarRating from '@/utils/StarRating'
import { formatPrice } from '@/utils/formatPrice'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NoImage from '@/public/NoImage.png'
import CardButton from './CardButton/CardButton'
import { SetStateAction } from 'react'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

const Card = ({
	book,
	setSelectedId,
}: {
	book: Book
	setSelectedId: React.Dispatch<SetStateAction<Book | null>>
}) => {
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
			//  layoutId={book.id}
			className={styles.card}
		>
			<div className={styles.left}>
				<Image src={image} alt={head} width={212} height={300} />
			</div>
			<div className={styles.right}>
				<div className={styles.content}>
					<div
					//  onClick={() => setSelectedId(book)}
					 className={styles.title}
					 >
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

export default Card
