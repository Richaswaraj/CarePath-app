import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://carepath_owner:cLWXgUz95rjG@ep-blue-sun-a1ki7adf.ap-southeast-1.aws.neon.tech/carepath?sslmode=require"
);
export const db = drizzle(sql, { schema });
