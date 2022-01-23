import axios from 'axios';

export default (baseUrl) => ({
    index: async () => {
        let res;
        try {
            res = await axios({
                method: 'get',
                url: baseUrl,
            });
        } catch (e) {
            throw { errorCode: 30, message: "connection error" };
        }

        const { success, errorCode, message, data } = res.data;
        if (success !== true) throw { errorCode, message };
        return data;
    },
    read: async (id) => {
        let res;
        try {
            res = await axios({
                method: 'get',
                url: baseUrl + "/" + id,
            });
        } catch (e) {
            throw { errorCode: 30, message: "connection error" };
        }

        const { success, errorCode, message, data } = res.data;
        if (success !== true) throw { errorCode, message };
        return data;
    },
    create: async (item) => {
        let res;
        try {
            res = await axios({
                method: 'post',
                url: baseUrl,
                data: item,
            });
        } catch (e) {
            throw { errorCode: 30, message: "connection error" };
        }

        const { success, errorCode, message, data } = res.data;
        if (success !== true) throw { errorCode, message };
        return data;
    },
    update: async (id, item) => {
        let res;
        try {
            res = await axios({
                method: 'put',
                url: baseUrl + "/" + id,
                data: item,
            });
        } catch (e) {
            throw { errorCode: 30, message: "connection error" };
        }

        const { success, errorCode, message, data } = res.data;
        if (success !== true) throw { errorCode, message };
        return data;
    },
    updateOrCreate: async (item) => {
        let res;
        try {
            res = await axios({
                method: 'put',
                url: baseUrl,
                data: item,
            });
        } catch (e) {
            throw { errorCode: 30, message: "connection error" };
        }

        const { success, errorCode, message, data } = res.data;
        if (success !== true) throw { errorCode, message };
        return data;
    },
    delete: async (id) => {
        let res;
        try {
            res = await axios({
                method: 'delete',
                url: baseUrl + "/" + id,
            });
        } catch (e) {
            throw { errorCode: 30, message: "connection error" };
        }

        const { success, errorCode, message, data } = res.data;
        if (success !== true) throw { errorCode, message };
        return data;
    },
})