import { apiInstance } from "./index.js";

const api = apiInstance();

function join(user, success, fail) {
  api.post(`/user/join`, JSON.stringify(user)).then(success).catch(fail);
}

function getUserinfo(userid, success, fail) {
  api.get(`/user/${userid}`).then(success).catch(fail);
}

function modifyUserinfo(user, success, fail) {
  api.put(`/user`, JSON.stringify(user)).then(success).catch(fail);
}

function deleteUserinfo(email, success, fail) {
  api.delete(`/user/${email}`).then(success).catch(fail);
}
// ㄱㅣ존

async function login(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/user/info/${userid}`).then(success).catch(fail);
}

// function logout(success, fail)

export { login, findById, join, modifyUserinfo, deleteUserinfo, getUserinfo };
