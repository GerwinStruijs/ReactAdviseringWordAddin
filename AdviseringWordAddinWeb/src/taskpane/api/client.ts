import axios from "axios";
import MockAdapter from 'axios-mock-adapter'

export const apiClient = axios.create({
    baseURL: "/api",
});

const adapter = new MockAdapter(apiClient, { delayResponse: 1000 });

adapter.onGet('/case/W01.01.0001').reply(200, {
    data: {
        caseId: "W01.01.0001"
    }
});