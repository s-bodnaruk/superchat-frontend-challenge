import { toast } from "react-toastify";

const notifyconteiner = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 2000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const notify = (message: string) => {
  toast.error(message, notifyconteiner);
};
