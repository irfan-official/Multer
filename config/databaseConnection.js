import mongoose from "mongoose";

export default async function () {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log(`Connected to the ${process.env.DB_NAME}`))
    .catch((err) => console.log(`Database connection ERROR => ${err.message}`));
}
