import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { removeCategoryAsync } from "../../redux/actions/asyncActions";

const RemoveCategoryButton: React.FC<{onSubmit: Function, categoryId: number}> = (props) => {
    return (
        <Button className="col-lg-1 mx-1 control-button" variant="danger" onClick={() => {props.onSubmit(props.categoryId)}}>
            X
        </Button>
    )
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return {
        onSubmit: (categoryId: number) => {
            dispatch(removeCategoryAsync(categoryId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveCategoryButton);