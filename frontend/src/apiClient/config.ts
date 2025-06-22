import { Configuration } from "./configuration";

const apiConfig = new Configuration({
    basePath: process.env.BACKEND_HOST,
});

export { apiConfig };
