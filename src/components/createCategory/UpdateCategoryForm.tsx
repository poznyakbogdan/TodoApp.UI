import { updateCategoryAsync } from "../../redux/actions/asyncActions";
import { connect } from "react-redux";
import CategoryForm from "./CategoryForm";
import { Category } from "../../models/Category";

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch: any, props: {onSubmit: Function}) {
    return {
        onSubmit: (category: Category) => {
            dispatch(updateCategoryAsync(category.id, category.name));
            props.onSubmit();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);