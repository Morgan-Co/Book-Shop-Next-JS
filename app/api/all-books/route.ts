export async function GET(req: Request) {
	// const { searchParams } = new URL(req.url)
	// const startIndex = searchParams.get('startIndex')
	// console.log(searchParams)

	let books
	// if (startIndex) {
		const res = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=architecture&startIndex=6&maxResults=6&key=AIzaSyAcTiKfk8DoR6ntXIMbv5hp-dptOuitPWE`,
			{ next: { revalidate: 180 } }
		)
		books = await res.json()
	// }

	return Response.json(books)
}
