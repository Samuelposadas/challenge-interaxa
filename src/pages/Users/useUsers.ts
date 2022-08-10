import { useState, useEffect } from "react";
import { User } from "../../interfaces/api";
import { handleGetUsers } from "../../services/api";

const useUsers = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<User[]>([]);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const getUsers = async () => {
    try {
      const data = await handleGetUsers();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleModalAdd = (refresh?: boolean) => {
    setIsOpenAddModal(!isOpenAddModal);
    if (refresh) {
      getUsers();
    }
  };

  const handleModalUpdate = (user?: User, refresh?: boolean) => {
    setCurrentUser(user || null);
    setIsOpenUpdateModal(!isOpenUpdateModal);
    if (refresh) {
      getUsers();
    }
  };

  const handleModaleDelete = (user?: User, refresh?: boolean) => {
    setCurrentUser(user || null);
    setIsOpenDeleteModal(!isOpenDeleteModal);
    if (refresh) {
      getUsers();
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    loading,
    error,
    data,
    currentUser,
    isOpenUpdateModal,
    isOpenAddModal,
    isOpenDeleteModal,
    getUsers,
    handleModalAdd,
    handleModalUpdate,
    handleModaleDelete,
  };
};

export default useUsers;
