import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const query = searchParams.get('q')

	let books
	if (query) {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=6&maxResults=6&key=AIzaSyAcTiKfk8DoR6ntXIMbv5hp-dptOuitPWE`
		)
		books = await response.json()
	}

	return NextResponse.json(books)
}
