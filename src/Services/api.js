import axios from "axios";
import { EndPointApi } from "../Config/api_config";
import { toast } from "react-toastify";

export let api = async function ({
  method = "get",
  path,
  body,
  headers = null,
}) {
  return await new Promise((resolve, reject) => {
    axios(EndPointApi + path, {
      method: method,
      headers: headers,
      data: body,
    })
      .then((data) => {
        resolve(statusHelper(data));
      })
      .catch((error) => {
        reject(statusHelper(error.response));
      });
  });
};

var statusHelper = (data) => {
  const notify = (msg) => toast.error(msg);
  if (data.status === 404) {
    notify(data.statusText);
  } else if (data.status === 0) {
    notify("Network Error");
  } else {
    return data.data;
  }
};
