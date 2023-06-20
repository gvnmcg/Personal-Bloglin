import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
        }),
    ],
    secret: process.env.JWT_SECRET,
    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
    database: process.env.MONGODB_URI
});

