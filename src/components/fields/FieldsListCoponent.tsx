import './Fields.css'
import {FieldComponent} from "@/components/fields/FieldComponent";
import {AddNewFieldComponent} from "@/components/fields/AddNewFieldComponent";
import {useEffect, useRef, useState} from "react";
import {FieldItem} from "@/types/field.type";
import {getUserFields} from "@/api/fields.api";

export const FieldsListComponent = () => {

    const [fields, setFields] = useState<FieldItem[]>([])

    const elementRef = useRef<HTMLDivElement | null>(null)
    const [fieldsWidth, setFieldsWidth] = useState<number>(0)

    const getFields = async () => {
        const data = await getUserFields()
        setFields(data.items)
    }

    useEffect(() => {
        (async () => {
            await getFields();

        })()

        const updateWidth = () => {
            if (elementRef.current) {
                setFieldsWidth(elementRef.current.offsetWidth);
            }
        };

        updateWidth(); // initial width
        window.addEventListener('resize', updateWidth);


        return () => {
            window.removeEventListener('resize', updateWidth);
        };

    }, [
        setFields,
    ])

    return (
        <div className={"user-fields"} ref={elementRef}>

            {fields && fields.map((field) => {
                return (
                    <FieldComponent field={field} key={field.userFields.id} cb={getFields} width={Number(fieldsWidth)}/>
                )

            })}

            <AddNewFieldComponent width={Number(fieldsWidth)} />

        </div>
    )
}