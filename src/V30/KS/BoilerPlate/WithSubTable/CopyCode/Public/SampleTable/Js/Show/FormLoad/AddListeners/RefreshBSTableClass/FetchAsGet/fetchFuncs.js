import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = ConfigJson.GetEndPoint;

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

