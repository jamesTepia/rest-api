import healthRouter from "./health.js";

const routes = (app, express) => {
	app.use("/", healthRouter(express));
};

export default routes;
