import { apiInstance } from "./index.js";

const api = apiInstance();

async function searchStores(address, success, fail) {
    return api.post(`/store/geo`, JSON.stringify(address)).then(success).catch(fail);
}

function searchWholeStores(params,success, fail) {
    console.log("api , 상점 가져오기 " + params)
    api.get(`/store`,{ params: params }).then(success).catch(fail);
}

function getStoreListAPI(address,success, fail) {
    api.get(`/store/stores`, {params:address}).then(success).catch(fail);
}

export { searchStores, searchWholeStores, getStoreListAPI};
