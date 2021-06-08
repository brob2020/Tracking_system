import axios from "axios";

// Add authorization to request
/*
axios.interceptors.request.use(function (config) {
  if (!config.headers.Authorization)
    config.headers.Authorization = `Bearer ${localStorage.getItem("tok")}`;
  return config;
}); */

function post(url, data = null, config = {}) {
  return axios.post(url, data, { headers: config });
}

function get(url, config = {}) {
  return axios.get(url, { headers: config });
}

function put(url, data = null, config = {}) {
  return axios.put(url, data, { headers: config });
}

function del(url, data = null, config = {}) {
  return axios.delete(url, data, { headers: config });
}

export { post, get, put, del };
