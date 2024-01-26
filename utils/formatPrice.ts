import type { Book } from '@/types/type'

export const formatPrice = (book: Book, count: number = 1) => {
	const saleability = book.saleInfo.saleability
	if (saleability === 'FOR_SALE') {
		const price = book.saleInfo.retailPrice.amount * count
		const currency = book.saleInfo.retailPrice.currencyCode
		const country = book.accessInfo.country
		const config = {
			style: 'currency',
			currency
		}
		return new Intl.NumberFormat(country, config).format(price)
	}
	return 'no price'
}
