import NextAuth from 'next-auth/next';
import { JWT } from 'next-auth/jwt';
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      birthDate: string;
      role: string | null;
    };
    token: string;
    refreshToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    User: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      birthDate: string;
      role: string | null;
    };
    token: string;
    refreshToken: string;
  }
}
