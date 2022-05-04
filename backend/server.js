const app = require("./app");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv")

const database = require("./config/database")

dotenv.config({ path: "backend/config/.env" })

database()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
