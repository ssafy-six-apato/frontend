import axios from "axios";

// axios 객체 생성
export default axios.create({
    baseURL: "http://13.209.109.228:9999/vue",
    // 13.209.109.228
    // localhost
    headers: {
        "Content-type": "application/json",
    },
});
