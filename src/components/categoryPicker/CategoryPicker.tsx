import React from "react";
import { Category } from "../../models/Category";
import { DropdownButton, InputGroup, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import IStateModel from "../../redux/types";

const CategoryPicker: React.FC<{categories: Category[], initialValue?:number, set: Function}> = (props) => {
    const [value, setValue] = React.useState(props.initialValue);

    return (
        <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title={value == null ? "Unassigned" : props.categories.find(x => x.id == value).name}
        id="input-group-dropdown-1"
        >
            {
                props.categories.map(category => 
                    <Dropdown.Item href="#" key={category.id} eventKey={""+category.id} onClick={() => {
                        setValue(category.id);
                        props.set(category.id);
                    }}>{category.name}</Dropdown.Item>
                )
            }
        </DropdownButton>
    )
}

function mapStateToProps(state: IStateModel){
    return {
        categories: state.entities.categories
    }
}

function mapDispatchToProps(){
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPicker);

