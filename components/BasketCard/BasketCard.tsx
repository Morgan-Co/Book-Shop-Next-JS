'use client'
import Image from 'next/image'
import NoImage from '@/public/NoImage.png'
import StarRating from '@/utils/StarRating'
import { useState } from 'react'
import styles from './BasketCard.module.scss'
import { Open_Sans } from 'next/font/google'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

const BasketCard = () => {
	const [count, setCount] = useState<number>(1)

	const lowerCount = () => {
		if (count === 1) return
		setCount(count - 1)
	}

	return (
		<div className={styles.basketCard}>
			<div className={styles.bookInfo}>
				<div>
					<Image src={NoImage} alt='No Image' width={102.5} height={145} />
				</div>
				<div className={styles.right}>
					<div className={styles.content}>
						<h4 className={styles.title}>The weight of things</h4>
						<h6 className={`${styles.authors} ${openSans.className}`}>
							Marianne Fritz
						</h6>
						<div className={styles.rating}>
							<div className={styles.averageRating}>
								<StarRating rating={3.6} />
							</div>
							<div className={`${styles.ratingsCount} ${openSans.className}`}>
								153 review
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.productCount}>
				<button
					className={styles.quantityButton}
					onClick={lowerCount}
				>
					<FiMinus />
				</button>
				<span className={styles.quantity}>{count}</span>
				<button
					className={styles.quantityButton}
					onClick={() => setCount(count + 1)}
				>
					<FiPlus />
				</button>
			</div>
			<div className={styles.price}>${18.23 * count}</div>
			<div className={styles.delivery}>Shipping: delivery</div>
		</div>
	)
}

export default BasketCard
