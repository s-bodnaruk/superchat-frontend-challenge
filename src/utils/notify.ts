import { toast } from "react-toastify";

const notifyconteiner = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const notifyerror = (message: string) => {
  toast.error(message, notifyconteiner);
};

export const notifysuccess = (message: string) => {
  toast.success(message, notifyconteiner);
};
