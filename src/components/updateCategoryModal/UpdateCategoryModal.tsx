import React from "react";
import { Modal } from "react-bootstrap";
import UpdateCategoryForm from "../createCategory/UpdateCategoryForm";
import { Category } from "../../models/Category";

const UpdateCategoryModal: React.FC<{category: Category, isShowModal: boolean, onHide: Function, onSubmit: Function}> = (props) => {
    return (
        <Modal show={props.isShowModal} onHide={() => props.onHide()}>
            <Modal.Header closeButton>
                <Modal.Title>Update category</Modal.Title>
            </Modal.Header>
            <UpdateCategoryForm category={props.category} onSubmit={() => props.onSubmit()} />
        </Modal>
    );
}

export default UpdateCategoryModal;