import Modal from "react-modal";
import { X } from "lucide-react";
import React from "react";

Modal.setAppElement("#root");

type ModalPayload = {
    openModal: boolean;
    afterOpen?: () => void;
    closedModal: () => void;
    content: React.ReactNode;
};

export const MyModal = ({
                            openModal,
                            afterOpen,
                            closedModal,
                            content,
                        }: ModalPayload) => {
    const closeModal = () => {
        closedModal();
    };

    const customStyles: Modal.Styles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            borderRadius: "15px",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    return (
        <Modal
            isOpen={openModal}
            onAfterOpen={afterOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <X onClick={closeModal} className="close-modal" />

            <div className="modal-container">{content}</div>
        </Modal>
    );
};