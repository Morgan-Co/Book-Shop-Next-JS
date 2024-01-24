import Profile from '../public/Profile.svg'
import Basket from '../public/Basket.svg'
import type { Categories, NavLink, SliderImages, UserSection } from './type'
import banner1 from '../public/banner1.png'
import banner2 from '../public/banner2.png'
import banner3 from '../public/banner3.png'

export const navLinks: NavLink[] = [
	{
		title: 'books',
		href: '/',
	},
	{
		title: 'audiobooks',
		href: '/audiobooks',
	},
	{
		title: 'Stationery & gifts',
		href: '/stationery&gifts',
	},
	{
		title: 'blog',
		href: '/blog',
	},
]

export const userSection: UserSection = [
	{
		label: 'Profile',
		url: Profile,
	},
	{
		label: 'Basket',
		url: Basket,
	},
]

export const sliderImages: SliderImages = [
	{ src: banner1.src, alt: 'Banner 1' },
	{ src: banner2.src, alt: 'Banner 2' },
	{ src: banner3.src, alt: 'Banner 3' },
]

export const categories: Categories = [
	{
		label: 'Architecture',
	},
	{
		label: 'Art & Fashion',
	},
	{
		label: 'Biography',
	},
	{
		label: 'Business',
	},
	{
		label: 'Crafts & Hobbies',
	},
	{
		label: 'Drama',
	},
	{
		label: 'Fiction',
	},
	{
		label: 'Food & Drink',
	},
	{
		label: 'Health & Wellbeing',
	},
	{
		label: 'History & Politics',
	},
	{
		label: 'Humor',
	},
	{
		label: 'Poetry',
	},
	{
		label: 'Psychology',
	},
	{
		label: 'Science',
	},
	{
		label: 'Technology',
	},
	{
		label: 'Travel & Maps',
	},
]

export const basketParams = [
	{
		label: 'Item',
	},
	{
		label: 'Quantity',
	},
	{
		label: 'Price',
	},
	{
		label: 'Delivery',
	},
]
