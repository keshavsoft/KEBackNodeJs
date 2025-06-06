const CommonRouterSearch = `router.use("/`;

const StartFunc = ({ inLinesArray, inNewRoute }) => {
    const LocalNewRoute = inNewRoute;
    let LocalLines = inLinesArray;

    let LocalFindIndex = LocalLines.findIndex((element) => element.startsWith(CommonRouterSearch));
    const LocalToInsertLine = `router.use("/${LocalNewRoute}", routerFrom${LocalNewRoute});\r`;

    LocalLines.splice(LocalFindIndex, 0, `${LocalToInsertLine}`);
};

module.exports = { StartFunc };
