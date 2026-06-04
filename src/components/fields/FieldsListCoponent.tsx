import './Fields.css'
import {FieldComponent} from "@/components/fields/FieldComponent";
import {AddNewFieldComponent} from "@/components/fields/AddNewFieldComponent";
import {useEffect, useState} from "react";
import {FieldItem} from "@/types/field.type";
import {getUserFields} from "@/api/fields.api";

export const FieldsListComponent = () => {

    const [fields, setFields] = useState<FieldItem[]>([])


    const getFields = async () => {
        const data = await getUserFields()
        setFields(data.items)
    }

    useEffect(() => {
        (async () => {
            await getFields();
        })()


    }, [
        setFields,
    ])

    return (
        <div className={"user-fields"}>

            {fields && fields.map((field) => {
                return (
                    <FieldComponent field={field}/>
                )

            })}

            <AddNewFieldComponent/>

        </div>
    )
}