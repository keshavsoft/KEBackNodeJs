const StartFunc = (req, res, next) => {
    const { Key: LocalKey } = req.body;

    if (!LocalKey) {
        return res.status(404).json({
            KTF: false,
            KReason: "Post request body should contain:",
            body: "Key"
        });
    };

    next();
};

export { StartFunc };
