import {FieldItem} from "@/types/field.type";

export const FieldComponent = ({field}: { field: FieldItem }) => {


    return (
        <div className={'field-item'}>

            <div className={"field-seed-name"}>{field.seeds.title}</div>

            <img src="/public/images/carrot.png" className={"field-img"} alt=""/>
            <div className={"field-progress"}>
                <div className={"progress-bar"} style={{width: "42%"}}></div>
            </div>
        </div>
    )


}