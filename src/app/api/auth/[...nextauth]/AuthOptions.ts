import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/refresh`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.refreshToken}`,
    },
  });
  const response = await res.json();
  return {
    ...token,
    response,
  };
}

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Username',
          type: 'email',
          placeholder: 'jsmith@exmaple.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
          {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const user = await res.json();
        if (!res.ok) {
          throw new Error(user.message);
        }
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      if (new Date().getTime() > token.expiresIn) return token;
      return refreshToken(token);
    },
    async session({ token, session }) {
      session.user = token.User;
      session.token = token.token;
      session.refreshToken = token.refreshToken;
      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}`;
    },
  },
  pages: {
    signIn: '/login',
  },
};
