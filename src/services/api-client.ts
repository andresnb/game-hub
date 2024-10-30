import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "4cda8c9273c547578d2d2b1858399767"
    }
})