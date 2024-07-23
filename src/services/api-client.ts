import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "7b1012e06f0e4b9fb88483b7be20c52b"
    }
})