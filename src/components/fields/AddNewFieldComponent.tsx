import {CircleDollarSign, CirclePlus} from "lucide-react";
import {useEffect, useState} from "react";
import {buyNewField, getFieldPrice} from "@/api/fields.api";
import {ConfirmModal} from "@/components/ConfirmModal";
import toast from "react-hot-toast";

export const AddNewFieldComponent = ({width}: { width: number }) => {

    const elementWidth = (width / 2) - 10

    const [fieldPrice, setFieldPrice] = useState<number>(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {

            const fieldPrice = await getFieldPrice()
            setFieldPrice(fieldPrice)
        })()


    }, [])

    const handleBuyNewField = async () => {

        const data = await buyNewField();

        if ("error" in data) {
            toast.error(data?.error + "")
        } else {
            setOpen(false);
        }
    }

    return (
        <>
            <div className={"add-new-field"} style={{height: `${elementWidth}px`}} onClick={() => {
                setOpen(true);
            }}>
                <img src="/public/images/field-ground.png" className={"field-img"} alt=""/>
                <div className={"add-new-field-inner"}>
                    <CirclePlus size={38}/>
                    <span>New field {fieldPrice} <CircleDollarSign size={18}/></span>
                </div>
            </div>

            <ConfirmModal
                title={"Are you sure do but a new field?"}
                // description={""}
                open={open}
                onCancel={() => setOpen(false)}
                onConfirm={handleBuyNewField}
            />
        </>
    )
}