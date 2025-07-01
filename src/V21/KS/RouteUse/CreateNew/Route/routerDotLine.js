const CommonRouterSearch = `router.use("/`;

const FindLastIndex = ({ inLinesArray, inNewRoute }) => {
    const LocalNewRoute = inNewRoute;
    let LocalLines = inLinesArray;

    let LocalFindIndex = LocalLines.findLastIndex((element) => element.startsWith(CommonRouterSearch));
    const LocalToInsertLine = `router.use("/${LocalNewRoute}", routerFrom${LocalNewRoute});\r`;

    if (LocalFindIndex === -1) {
        const LocalArrayLength = LocalLines.length;

        LocalLines.splice(LocalArrayLength - 1, 0, ``);
        LocalLines.splice(LocalArrayLength - 1, 0, `${LocalToInsertLine}`);
    } else {
        LocalLines.splice(LocalFindIndex + 1, 0, `${LocalToInsertLine}`);
    };
};

module.exports = { FindLastIndex };
