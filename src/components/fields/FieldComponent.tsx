import {FieldItem} from "@/types/field.type";
import {MyModal} from "@/components/MyModal";
import {UserSeeds} from "@/components/user/UserSeeds";
import {useState} from "react";

export const FieldComponent = ({field, cb}: { field: FieldItem, cb: () => void }) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleGetSeeds = () => {
        setIsOpenModal(true);
    }


    const collectProduct = (fieldId: number) => {

    }

    if (field && field.userFields?.seedId === null) {

        return (
            <>
                <div className={'field-item'}>


                    <img src="/public/images/field-ground.png" className={"field-img"} alt=""/>

                    <button className={"btn info  sm seed-btn"} onClick={handleGetSeeds}>Seed
                    </button>
                </div>

                <MyModal
                    openModal={isOpenModal}
                    closedModal={() => setIsOpenModal(false)}
                    content={
                        <UserSeeds field={field} cb={async () => {
                            cb()
                            setIsOpenModal(false)
                        }}/>}
                />
            </>
        )
    }


    return (
        <>
            <div className={'field-item'}>

                <div className={"field-seed-name"}>{field.seeds.title}</div>

                <img src="/public/images/carrot.png" className={"field-img"} alt=""/>
                <div className={"field-progress"}>
                    <div className={"progress-bar"} style={{width: "42%"}}></div>
                </div>

                <button className={"btn info  sm seed-btn"} onClick={() => {
                    collectProduct(field.userFields.id);
                }}>Collect
                </button>
            </div>

        </>
    )


}