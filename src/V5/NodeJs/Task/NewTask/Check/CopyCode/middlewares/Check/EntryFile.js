let PostCheckFunc = (req, res, next) => {
    let LocalRequestBody = req.body;
    let LocalUserName = LocalRequestBody.UserName;
    let LocalPassword = LocalRequestBody.Password;

    if (LocalUserName === "") {
        res.status(404).json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: "UserName"
        });
        return;
    };
    if (LocalPassword === "") {
        res.status(404).json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: "Password"
        });
        return;
    };

    next();
};


export { PostCheckFunc };