export async function GET() {
	const res = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=architecture&startIndex=6&maxResults=6&key=AIzaSyAcTiKfk8DoR6ntXIMbv5hp-dptOuitPWE`,
		{ next: { revalidate: 180 } }
	)
	const data = await res.json()

	return Response.json(data)
}
