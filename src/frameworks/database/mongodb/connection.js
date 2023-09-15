const connection = (mongoose, config, options) => {
	const connectToMongo = async () => {
		try {
			const conn = await mongoose.connect(config.mongo.uri);
			console.log(`MongoDB Connected: ${conn.connection.host}`);
		} catch (err) {
			console.log(err);
			process.exit(1);
		}
	};

	mongoose.connection.on("connected", () => {
		console.log("Connected to MongoDB!");
	});

	mongoose.connection.on("reconnected", () => {
		console.log("MongoDB reconnected!");
	});

	mongoose.connection.on("error", (err) => {
		console.log(`Error in MongoDb connection: ${err}`);
		mongoose.disconnect();
	});

	mongoose.connection.on("disconnected", () => {
		console.log(
			`MongoDB disconnected! Reconnecting in ${
				options.reconnectInterval / 1000
			}s...`
		);
		setTimeout(() => connectToMongo(), options.reconnectInterval);
	});

	return {
		connectToMongo,
	};
};

export default connection;
