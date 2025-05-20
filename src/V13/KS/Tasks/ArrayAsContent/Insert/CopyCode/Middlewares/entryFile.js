const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody) {
        return res.status(404).json({
            KTF: false,
            KReason: "Post request body should contain:",
            body: "LocalBody"
        });
    }

    next();
};

export { StartFunc };
