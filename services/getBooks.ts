export const getAllBooks = async () => {
	const response = await fetch(`http://localhost:3000/api/all-books`)
	if (!response.ok) throw new Error('Unable to fetch posts.')
	return response.json()
}

export const getBooksWithCategory = async (
	category: string,
	index?: number
) => {
	const response = await fetch(
		`http://localhost:3000/api/books-category?q=${category}&index=${index}`
	)
	if (!response.ok) throw new Error('Unable to fetch posts.')
	return response.json()
}
