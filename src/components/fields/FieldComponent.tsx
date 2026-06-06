import {FieldItem} from "@/types/field.type";
import {MyModal} from "@/components/MyModal";
import {UserSeeds} from "@/components/user/UserSeeds";
import {useEffect, useState} from "react";
import {getDateProgressPercentage} from "@/helpers/date.helper";
import {getFieldProgressImage} from "@/helpers/field.helper";
import toast from "react-hot-toast";
import {collectUserField} from "@/api/fields.api";
import {useAuth} from "@/hooks/useAuth";

export const FieldComponent = ({field, width, cb}: { field: FieldItem, width: number, cb: () => void }) => {
    const {refreshUser} = useAuth();

    const elementWidth = (width / 2) - 10


    const [isOpenModal, setIsOpenModal] = useState(false);


    const [currentDate, setCurrentDate] = useState(() => new Date());

    let progress = 0;

    useEffect(() => {

        const interval = setInterval(() => setCurrentDate(new Date()), 1000)
        return () => clearInterval(interval);

    }, [])

    if (field.userFields?.startedAt && field.userFields?.finishedAt) {
        progress = getDateProgressPercentage(field.userFields.startedAt, field.userFields.finishedAt, currentDate);
    }


    const handleGetSeeds = () => {
        setIsOpenModal(true);
    }

    const collectProduct = async (fieldId: number) => {

        const data = await collectUserField(fieldId);

        if ("error" in data) {
            toast.error(data?.error + "")
        }
        await refreshUser();
        cb()

    }

    if (field && field.userFields?.seedId === null) {

        return (
            <>
                <div className={'field-item'} style={{height: `${elementWidth}px`}}>


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
            <div className={'field-item'} style={{height: `${elementWidth}px`}}>

                <div className={"field-seed-name"}>{field.seeds.title}</div>

                <img src={getFieldProgressImage(field, progress, import.meta.env.VITE_API_URL)} className={"field-img"}
                     alt=""/>
                <div className={"field-progress"}>
                    <div className={"progress-bar"} style={{width: `${progress}%`}}></div>
                </div>

                <button className={"btn info  sm collect-btn " + (progress >= 100 ? 'show-collect-btn' : "")}
                        onClick={() => {
                            collectProduct(field.userFields.id);
                        }}>Collect
                </button>
            </div>

        </>
    )


}