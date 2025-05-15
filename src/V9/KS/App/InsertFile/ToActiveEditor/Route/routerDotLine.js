const CommonRouterSearch = `app.use("/`;
const CommonRouterSearch2ndOption = `app.use('/`;

const StartFunc = ({ inLinesArray, inNewRoute }) => {
    const LocalNewRoute = inNewRoute;
    let LocalLines = inLinesArray;

    let LocalFindLastIndex = LocalLines.findLastIndex((element) => element.startsWith(CommonRouterSearch));

    if (LocalFindLastIndex === -1) {
        LocalFindLastIndex = LocalLines.findLastIndex((element) => element.startsWith(CommonRouterSearch2ndOption));
    };

    const LocalToInsertLine = `app.use("/${LocalNewRoute}", routerFrom${LocalNewRoute});\r`;

    if (LocalFindLastIndex === -1) {
        const LocalArrayLength = LocalLines.length;

        LocalLines.splice(LocalArrayLength - 1, 0, ``);
        LocalLines.splice(LocalArrayLength - 1, 0, `${LocalToInsertLine}`);
    } else {
        LocalLines.splice(LocalFindLastIndex + 1, 0, `${LocalToInsertLine}`);
    };
};

module.exports = { StartFunc };
