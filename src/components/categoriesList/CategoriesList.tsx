import React from "react";
import { ListGroup, Button, Modal } from "react-bootstrap";
import { Category } from "../../models/Category";
import { connect } from "react-redux";
import IStateModel from "../../redux/types";
import { fetchCategoriesAsync } from "../../redux/actions/asyncActions";
import { Link } from "react-router-dom";
import UpdateCategoryForm from "../createCategory/UpdateCategoryForm";
import "./CategoriesList.scss";
import RemoveCategoryButton from "../removeCategory/RemoveCategoryButton";

const CategoriesList: React.FC<{items: Category[], init: Function}> = (props) => {
    const [showModal, setShowModal] = React.useState(false);
    const [taskCategory, setCategory] = React.useState(null as Category);

    React.useEffect(() => {
        props.init();
    }, []);

    return (
        <div className="container">
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update category</Modal.Title>
                </Modal.Header>
                <UpdateCategoryForm category={taskCategory} onSubmit={() => setShowModal(false)} />
            </Modal>
            <ListGroup as="ul">
                {
                    props.items.map(category => (
                        <ListGroup.Item as="li" action>
                            <div className="row">
                                <Link to={`/lists/${category.id}`} className="col-lg-9">
                                    <div>
                                        {category.name}                                    
                                    </div>
                                </Link>
                                <Button className="col-lg-1 mx-1 control-button" variant="primary" onClick={() => {
                                    setCategory(category);
                                    setShowModal(true);
                                }}>
                                    Edit
                                </Button>
                                <RemoveCategoryButton categoryId={category.id} />
                            </div>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </div>
    );
}

function mapStateToProps(state: IStateModel) {
    return {
        items: state.entities.categories.filter(category => state.board.items.categories.includes(category.id))
    }
}

function mapDispatchToProps(dispatch: any){
    return {
        init: () => {
            dispatch(fetchCategoriesAsync())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);