import NextAuth from "next-auth"
import Google from "next-auth/providers/Google"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Google],
})