const CommonRouterSearch = "import { router as ";

const StartFunc = ({ inLinesArray, inNewRoute }) => {
    const LocalNewRoute = inNewRoute;
    let LocalLines = inLinesArray;

    // let LocalFindIndex = LocalLines.findIndex((element) => element.startsWith(CommonRouterSearch));
    let LocalFindLastIndex = LocalLines.findLastIndex((element) => element.startsWith(CommonRouterSearch));

    const LocalToInsertLine = `import { router as routerFrom${LocalNewRoute} } from "./${LocalNewRoute}/routes.js";`

    if (LocalFindLastIndex === -1) {
        LocalLines.splice(4, 0, ``);
        LocalLines.splice(4, 0, `${LocalToInsertLine}`);
    } else {
        LocalLines.splice(LocalFindLastIndex + 1, 0, `${LocalToInsertLine}`);
    };
};

module.exports = { StartFunc };
