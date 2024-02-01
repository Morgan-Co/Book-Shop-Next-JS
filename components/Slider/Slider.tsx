'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { sliderImages } from '@/constants'

const Slider = () => {
	const [imgIndex, setImgIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setImgIndex(prev => {
				if (prev === 2) return 0
				return prev + 1
			})
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='mb-[88px]'>
			<div className='flex overflow-hidden max-w-[1120px] w-full h-[702px] relative'>
				{sliderImages.map(({ src, alt }) => (
					<Image
						key={alt}
						style={{ translate: `${-100 * imgIndex}%`, transition: `200ms` }}
						src={src}
						alt={alt}
						width={1120}
						height={702}
					/>
				))}
			</div>
			<div className='flex justify-center gap-[10px] pt-[17px] pb-[17px]'>
				{sliderImages.map((_, index) => (
					<span
						className={`w-[12px] h-[12px] inline-block bg-[#efeef6] rounded-[50%] ${
							index === imgIndex && 'bg-light-purple'
						}`}
						key={index}
					></span>
				))}
			</div>
		</div>
	)
}

export default Slider
