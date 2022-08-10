import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";
import { User } from "../../interfaces/api";
import { deleteUser } from "../../services/api";

interface Props {
  handleModaleDelete: (user?: User, refresh?: boolean) => void;
  currentUser: User | null;
}

const useDeleteModal = ({ handleModaleDelete, currentUser }: Props) => {
  const { isAuthenticated } = useAuth0();

  const handleDeleteUser = async () => {
    if (isAuthenticated) {
      const result = await deleteUser(currentUser?.id || 0);
      if (result) {
        toast.success("Sucefully Delete");
        handleModaleDelete(undefined, true);
      } else {
        toast.error("Error");
      }
    } else {
      toast("You must login");
    }
  };
  return {
    handleDeleteUser,
  };
};

export default useDeleteModal;
