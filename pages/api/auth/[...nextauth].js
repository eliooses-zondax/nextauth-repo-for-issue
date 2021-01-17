import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
  site: process.env.NEXTAUTH_URL,
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  // Enable debug messages in the console if you are having problems
  debug: false,
}

export default (req, res) => NextAuth(req, res, options)
