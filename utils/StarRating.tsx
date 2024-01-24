import { FaRegStar, FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'

const StarRating = ({ rating }: { rating: number | null }) => {
	if (rating) {
		const fullStars = Math.floor(rating)
		const halfStar = rating - fullStars
		const stars = []
		for (let i = 0; i < fullStars; i++) {
			stars.push(<FaStar />)
		}
		if (halfStar >= 0.5) {
			stars.push(<FaRegStarHalfStroke />)
		}
		const emptyStars = 5 - Math.ceil(rating)
		for (let i = 0; i < emptyStars; i++) {
			stars.push(<FaRegStar />)
		}
		return (
			<>
				{stars.map((star, index) => (
					<span key={index}>{star}</span>
				))}
			</>
		)
	}
	return <>no stars</>
}

export default StarRating
