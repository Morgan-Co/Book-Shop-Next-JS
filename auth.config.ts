import Google from 'next-auth/providers/google'

import type { NextAuthConfig, User } from 'next-auth'
import credentials from 'next-auth/providers/credentials'
import { users } from './data/users'

export default {
	providers: [
		Google,
		credentials({
			credentials: {
				email: { label: 'email', type: 'email', required: true },
				password: { label: 'password', type: 'password', required: true },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) return null
				// const currentUser = users.find(user => user.email === credentials.email)
				// if (currentUser && currentUser.password === credentials.password) {
					// const { password, ...userWithoutPass } = currentUser
					const user = {
						email: credentials.email,
						name: ''
					}
					return user as User
				// }
				return null
			},
		}),
	],
} satisfies NextAuthConfig
