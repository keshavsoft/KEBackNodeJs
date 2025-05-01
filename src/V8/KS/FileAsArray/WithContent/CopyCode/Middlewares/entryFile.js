const PostFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || Array.isArray(LocalBody) === false) {
        return res.status(404).json({
            KTF: false,
            KReason: "Post request body should not be empty.",
            body: "An empty body was provided."
        });
    }

    next();
};

export { PostFunc };
