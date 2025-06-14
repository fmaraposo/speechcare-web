export const env = {
  databaseUrl: process.env.DATABASE_URL!,
  nodeEnv: process.env.NODE_ENV!,
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
  nextAuthUrl: process.env.NEXTAUTH_URL!,
  nextAuthSecret: process.env.NEXTAUTH_SECRET!,
};
