import React from "react";
import { Category } from "../../models/Category";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const CategoryForm: React.FC<{category?: Category, onSubmit: Function}> = (props) => {
    const isCreate = props.category == null;
    const categoryId = props.category?.id;

    const [name, setName] = React.useState(props.category?.name);

    return (
        <div className="p-3">
            <InputGroup>
                <FormControl 
                className="" 
                aria-describedby="basic-addon1" 
                placeholder="Name..." 
                type="text" 
                value={name}
                name="category_name" id="category_name" 
                onChange={(e:any) => {
                    setName(e.target.value)
                } } />
                <InputGroup.Append>
                    <Button 
                    className="" 
                    block onClick={() =>
                        props.onSubmit({id: categoryId, name} as Category)
                    }>
                        {isCreate ? "Create" : "Update"}
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default CategoryForm;