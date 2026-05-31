import './Fields.css'
import {FieldComponent} from "@/components/fields/FieldComponent";
import {AddNewFieldComponent} from "@/components/fields/AddNewFieldComponent";

export const FieldsListComponent = () => {

    return (
        <div className={"user-fields"}>


            <FieldComponent/>

            <FieldComponent/>

            <AddNewFieldComponent/>

        </div>
    )
}