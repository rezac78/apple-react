import axios from "axios";
import { toast } from 'react-toastify';

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, error => {
    const expectedErrors = error.response
        && error.response.status >= 400
        && error.response.status < 500;
    if (!expectedErrors) {
        toast.error('خطا رخ داده از سمت سرور', { position: "top-right", closeOnClick: true });
    }
    return Promise.reject(error);
})

export default {
    put: axios.put,
    post: axios.post,
    delete: axios.delete,
    get: axios.get
}