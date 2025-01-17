import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClientPromise from "./database/MongoClientPromise";

export const authConfig = {
  trustHost: true,
  trustHostedDomain: true,

  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: "RedComrade",
  }),
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/auth/signin",
  //   error: "/auth/error", // Add this line
  // },
  providers: [],
};
