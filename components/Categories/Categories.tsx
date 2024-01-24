'use client'
import { categories } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Montserrat } from 'next/font/google'
import styles from './Categories.module.scss'
import { setCategory } from '@/redux/features/categories/categorySlice'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['500', '700'],
})

const Categories = () => {
	const { category } = useAppSelector(state => state.categories)
	const dispatch = useAppDispatch()

	return (
		<div className={styles.categories}>
			<ul>
				{categories.map(item => {
					const transformedCurrentItem = item.label
						.replace(/\s/g, '')
						.toLowerCase()
					const transformedActiveItem = category
						.replace(/\s/g, '')
						.toLowerCase()
					return (
						<li
							key={item.label}
							className={`${styles.categoryItem} ${
								transformedCurrentItem === transformedActiveItem &&
								styles.activeItem
							}`}
						>
							<button
								onClick={() => {
									dispatch(setCategory(item.label))
								}}
								className={` ${montserrat.className}`}
								type='button'
							>
								{item.label}
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Categories
