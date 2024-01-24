'use client'
import { Book } from '@/types/type'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import styles from './Card.module.scss'
import Button from '../ui/Button/Button'
import StarRating from '@/utils/StarRating'
import { formatPrice } from '@/utils/formatPrice'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NoImage from "@/public/NoImage.png"

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

const Card = ({ book }: { book: Book }) => {
	const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail :  NoImage
	const head = book.volumeInfo.title
	const description = book.volumeInfo.description || "no description"
	const authors = book.volumeInfo.authors
		? book.volumeInfo.authors[0]
		: 'no authors'
	// console.log(authors);

	const averageRating = book.volumeInfo.averageRating
	const ratingsCount = book.volumeInfo.ratingsCount
		? `${book.volumeInfo.ratingsCount} reviews`
		: 'no reviews'

	const price = formatPrice(book)

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
					<Button func={()=> {}}>Buy Now</Button>
				</div>
			</div>
		</motion.div>
	)
}

export default Card
