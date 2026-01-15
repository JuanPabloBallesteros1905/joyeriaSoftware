





import { apiConfig } from "./api_config";





class ApiClient {

    private baseUrl: string;

    constructor() {
        this.baseUrl = apiConfig.baseUrl;
    }


    async get(endpoint: string) {
        const response = await fetch(this.baseUrl + endpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }


        return await response.json();
    }










}

export const apiClient = new ApiClient();