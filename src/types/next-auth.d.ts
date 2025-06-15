import { DefaultSession, DefaultUser } from "next-auth";

import { UserRoles } from "./user/user-roles.enum";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: UserRoles;
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRoles;
  }
}
