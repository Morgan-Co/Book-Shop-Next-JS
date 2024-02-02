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
			className={`sm:block lg:absolute -left-[200px] -top-[40px] z-0 lg:w-[416px] lg:h-[710px] bg-[#efeef6] flex justify-center items-center w-full h-fit lg:p-0 px-3 py-5 mb-5`}
		>
			<ul
				className={`flex lg:flex-col lg:gap-y-[23px] gap-x-[20px] gap-y-[20px] flex-wrap justify-center`}
			>
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
								'before:lg:block relative before:content-[""] before:hidden before:w-[6px] before:h-[6px] before:bg-secondary-purple before:absolute before:-left-[15px] before:top-[5px] before:rounded-full'
							}`}
						>
							<button
								className={`leading-[15px] bg-none border-none cursor-pointer w-full text-left hover:text-primary-purple ${
									montserrat.className
								} ${
									transformedCurrentItem === transformedActiveItem
										? 'text-[16px] text-dark-blue lg:font-bold'
										: 'lg:text-[14px] text-gray font-medium text-[16px]'
								} transition-all duration-200 ease`}
								type='button'
								onClick={() => {
									dispatch(setCategory(item.label))
								}}
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
