import dotenv from "dotenv";

dotenv.config();

const config = {
	port: process.env.PORT || 3000,
	mongo: {
		uri: process.env.MONGO_URI,
	},
};

export default config;
