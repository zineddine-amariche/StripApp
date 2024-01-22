import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateUserInfo } from "../../../../Redux/auth/slice";

export function paymentsHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { result } = useSelector((state) => state.auth);

  const onErrorAction = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

  const onSuccessUpdate = () => {
    console.log("success update ");
    navigate("/dashboard");
  };
  const onSuccessAction = (message, isPayed) => {
    let data = {
      isPayed,
      id: result.data._id,
    };

    let object = {
      data,
      onSuccessUpdate,
      onErrorAction
    };
    dispatch(updateUserInfo(object));
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

  

  return {
    onErrorAction,
    onSuccessAction,
  };
}
