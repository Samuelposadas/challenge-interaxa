import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth0 } from "@auth0/auth0-react";
import { BodyPost } from "../../interfaces/bodyPost";
import { handlePost } from "../../services/api";
import { validationSchema, initialValues } from "./schemas";
import toast from "react-hot-toast";

interface InitialValuesProps {
  name: string;
  lastName: string;
  nationality: string;
  email: string;
  age: number | null;
}

interface Props {
  handleModal: (refresh?: boolean) => void;
}

const useAddModal = ({ handleModal }: Props) => {
  const { isAuthenticated } = useAuth0();

  const handlePostUser = async (bodyPost: BodyPost) => {
    const result = await handlePost(bodyPost);
    if (isAuthenticated) {
      if (result) {
        handleModal(true);
        toast.success("Sucefully Post");
      } else {
        toast.error("Error");
      }
    } else {
      toast("You must login");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit(obj: InitialValuesProps) {
      handlePostUser(obj);
    },
  });

  return {formik,};
};

export default useAddModal;
