import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, handleToogle };
};

export default useModal;
