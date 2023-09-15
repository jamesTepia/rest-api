import healthController from "../../../adapters/controllers/healthController.js";

const healthRouter = (express) => {
	const router = express.Router();
	const controller = healthController();

	router.route("/").get(controller.getHealth);

	return router;
};

export default healthRouter;
