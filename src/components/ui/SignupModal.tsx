import { Button, Modal } from "antd";
import { ReactElement, ReactNode } from "react";

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
  title: string | ReactNode;
  children: ReactElement;
  handleOk?: () => void;
}

const SignupModal = ({ isOpen, closeModal, title, children }: IModal) => {
  return (
    <Modal open={isOpen} title={title} onCancel={closeModal} footer={[]}>
      {children}
    </Modal>
  );
};

export default SignupModal;
