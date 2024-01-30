'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { sliderImages } from '@/constants'
import styles from './Slider.module.scss'

const Slider = () => {
	const [imgIndex, setImgIndex] = useState(0)

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setImgIndex(prev => {
	// 			if (prev === 2) return 0
	// 			return prev + 1
	// 		})
	// 	}, 5000)

	// 	return () => clearInterval(interval)
	// }, [])

	return (
		<div className={styles.slider}>
			<div className={styles.sliderImages}>
				{sliderImages.map(({ src, alt }) => (
					<Image
						key={alt}
						style={{ translate: `${-100 * imgIndex}%`, transition: `200ms` }}
						src={src}
						alt={alt}
						// width={1120}
						// height={702}
						fill={true}
					/>
				))}
			</div>
			<div className={styles.bullets}>
				{sliderImages.map((_, index) => (
					<span
						className={`${styles.bullet} ${
							index === imgIndex && styles.activeBullet
						}`}
						key={index}
					></span>
				))}
			</div>
		</div>
	)
}

export default Slider
