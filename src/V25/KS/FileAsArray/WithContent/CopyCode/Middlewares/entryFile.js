const PostFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody) {
        return res.status(404).end(
            "Post request body should not be empty."
        );
    };

    if (Array.isArray(LocalBody) === false) {
        return res.status(404).end(
            "Post request body should be Array only."
        );
    };

    next();
};

export { PostFunc };
