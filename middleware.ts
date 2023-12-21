import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  mathcher: ['/((?api|_next/static|_net/image|.*\\.png$).*)'],  
};