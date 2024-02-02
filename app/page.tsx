import Products from '@/components/Products/Products'
import Categories from '@/components/Categories/Categories'
import Slider from '@/components/Slider/Slider'

export default function Home() {
	return (
		<>
			<Slider />
			<div className='lg:flex relative justify-end mb-[100px]'>
				<Categories />
				<Products />
			</div>
		</>
	)
}
