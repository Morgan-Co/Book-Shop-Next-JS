'use client'
import { categories } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Montserrat } from 'next/font/google'
import { setCategory } from '@/redux/features/categories/categorySlice'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['500', '700'],
})

const Categories = () => {
	const { category } = useAppSelector(state => state.categories)
	const dispatch = useAppDispatch()

	return (
		<div
			className={`absolute -left-[200px] -top-[40px] z-0 w-[416px] h-[710px] bg-[#efeef6] flex justify-center items-center`}
		>
			<ul className={`flex flex-col gap-y-[23px]`}>
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
							className={`flex ${
								transformedCurrentItem === transformedActiveItem &&
								'relative before:content-[""] before:block before:w-[6px] before:h-[6px] before:bg-secondary-purple before:absolute before:-left-[15px] before:top-[5px] before:rounded-full'
							}`}
						>
							<button
								onClick={() => {
									dispatch(setCategory(item.label))
								}}
								className={`text-[14px] leading-[15px] bg-none border-none cursor-pointer text-gray w-full text-left font-medium transition-colors duration-200 ease hover:text-primary-purple ${
									montserrat.className
								} ${
									transformedCurrentItem === transformedActiveItem &&
									'text-[16px] text-dark-blue font-bold'
								}`}
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
