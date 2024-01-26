import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const queryCategory = searchParams.get('q')
	const queryIndex = searchParams.get('index')
	
	let books
	if (queryCategory || queryIndex) {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${queryCategory}&startIndex=${queryIndex}&maxResults=6&key=AIzaSyAcTiKfk8DoR6ntXIMbv5hp-dptOuitPWE`
		)
		books = await response.json()
	}

	return NextResponse.json(books)
}