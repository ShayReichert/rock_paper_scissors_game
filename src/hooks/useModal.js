import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen((prevState) => !prevState);
  };
  console.log(isOpen);
  return { isOpen, handleToogle };
};

export default useModal;
