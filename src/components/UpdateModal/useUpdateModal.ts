import { validationSchema } from "./schema";
import toast from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import { putUser } from "../../services/api";
import { useFormik } from "formik";
import { User } from "../../interfaces/api";
import * as Yup from "yup";

interface InitialValuesProps {
  name: string;
  lastName: string;
  nationality: string;
  email: string;
  age: number | null;
}

interface Props {
  handleModalUpdate: (user?: User, refresh?: boolean) => void;
  currentUser: User | null;
}

const useUpdateModal = ({ currentUser, handleModalUpdate }: Props) => {
  const { isAuthenticated } = useAuth0();

  const handleUpdateUser = async (obj: InitialValuesProps) => {
    if (isAuthenticated) {
      const result = await putUser(obj, currentUser?.id || 0);
      if (result) {
        toast.success("Sucefully Update");
        handleModalUpdate(undefined, true);
      } else {
        toast.error("Error");
      }
    } else {
      toast("You must login");
    }
  };

  const formik = useFormik<InitialValuesProps>({
    initialValues: {
      name: currentUser?.name || "",
      lastName: currentUser?.lastName || "",
      nationality: currentUser?.nationality || "",
      email: currentUser?.email || "",
      age: currentUser?.age || null,
    },
    validationSchema: Yup.object(validationSchema),
    onSubmit(obj: InitialValuesProps) {
      handleUpdateUser(obj);
    },
  });

  return {
    formik,
  };
};

export default useUpdateModal;
