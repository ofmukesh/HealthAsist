import { api } from "../../Services/api";
import { AuthTypes } from "../Index/actions";
import { AuthenticateAPI } from "../../Config/api_config";
import { toast } from "react-toastify";

export const Authenticate = (request) => (dispatch) => {
  api({
    path: AuthenticateAPI.entry,
    method: "post",
    body: request.data,
  })
    .then((data) => {
      toast.success(data);
    })
    .catch((err) => {});
};
