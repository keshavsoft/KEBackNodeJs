const StartFunc = (req, res, next) => {
    const { Key: LocalKey, Value: LocalValue } = req.body;

    if (!LocalKey || !LocalValue) {
        return res.status(404).json({
            KTF: false,
            KReason: "Post request body should contain:",
            body: !LocalKey ? "Key" : "Value"
        });
    }

    next();
};

export { StartFunc };
