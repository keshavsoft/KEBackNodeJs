const CommonRouterSearch = "import { router as ";

const StartFunc = ({ inLinesArray, inNewRoute }) => {
    const LocalNewRoute = inNewRoute;
    let LocalLines = inLinesArray;

    let LocalFindIndex = LocalLines.findIndex((element) => element.startsWith(CommonRouterSearch));
    const LocalToInsertLine = `import { router as routerFrom${LocalNewRoute} } from "./${LocalNewRoute}/routes.js";`

    // LocalLines.splice(LocalFindIndex, 0, "");
    LocalLines.splice(LocalFindIndex, 0, `${LocalToInsertLine}`);
};

module.exports = { StartFunc };
