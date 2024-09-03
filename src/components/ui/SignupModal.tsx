import { Modal } from "antd";
import { ReactElement, ReactNode } from "react";

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactElement;
  handleOk?: () => void;
}

const SignupModal = ({ isOpen, closeModal, children }: IModal) => {
  return (
    <Modal open={isOpen} onCancel={closeModal} footer={[]}>
      {children}
    </Modal>
  );
};

export default SignupModal;
