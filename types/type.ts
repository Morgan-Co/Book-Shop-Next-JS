export type Book = {
	id: string
	accessInfo: {
		country: string
	}
	volumeInfo: {
		authors: string[]
		title: string
		description: string
		imageLinks: {
			smallThumbnail: string
			thumbnail: string
		}
		averageRating: number
		ratingsCount: number
	}
	saleInfo: {
		saleability: 'FOR_SALE' | 'NOT_FOR_SALE'
		retailPrice: {
			amount: number
			currencyCode: string
		}
	}
}
