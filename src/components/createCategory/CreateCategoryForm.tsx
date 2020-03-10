import { createCategoryAsync } from "../../redux/actions/asyncActions";
import { connect } from "react-redux";
import CategoryForm from "./CategoryForm";
import { Category } from "../../models/Category";

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return {
        onSubmit: (category: Category) => {
            console.log("create");
            dispatch(createCategoryAsync(category.name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);