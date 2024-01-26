export const getBooks = async (
	category: string,
	index?: number
) => {
	const response = await fetch(
		`/api/all-books?q=${category}&index=${index}`
	)
	if (!response.ok) throw new Error('Unable to fetch posts.')
	return response.json()
}
