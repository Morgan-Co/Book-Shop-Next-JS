export const getBooks = async (
	category: string,
	index?: number
) => {
	const response = await fetch(
		`http://localhost:3000/api/all-books?q=${category}&index=${index}`, {next: {revalidate: 60}})
	if (!response.ok) throw new Error('Unable to fetch posts.')
	return response.json()
}
