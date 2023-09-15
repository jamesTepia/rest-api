const healthController = () => {
	const getHealth = (_req, res, next) => {
		try {
			res.json({
				ok: true,
			});
		} catch (error) {
			next(error);
		}
	};

	return { getHealth };
};

export default healthController;
