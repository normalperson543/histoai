import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth"

export default {
  // Following code is from https://nextjs.org/learn/dashboard-app/adding-authentication
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
  },
  providers: [Credentials],
} satisfies NextAuthConfig