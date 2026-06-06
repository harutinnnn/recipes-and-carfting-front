import {UserSeedDataType} from "@/types/seed.type";
import {useEffect, useState} from "react";
import {getUserSeeds, setUserSeed} from "@/api/seeds.api";
import {ConfirmModal} from "@/components/ConfirmModal";
import toast from "react-hot-toast";
import {FieldItem} from "@/types/field.type";

export const UserSeeds = ({field, cb}: { field: FieldItem, cb: () => void }) => {

    const [seedId, setSeedId] = useState<number | null>(null);
    const [seedTitle, setSeedTitle] = useState<string>("");
    const [openConfModal, setOpenConfModal] = useState(false);

    const [userSeeds, setUserSeeds] = useState<UserSeedDataType[]>([]);


    const handeGetUserSeeds = async () => {
        const data = await getUserSeeds();
        setUserSeeds(data.items)
    }

    useEffect(() => {

        (async () => {
            await handeGetUserSeeds();
        })()

    }, [])


    const handleSeed = async (seedId: number) => {

        const data = await setUserSeed({fieldId: field.userFields.id, seedId: seedId})

        if ("error" in data) {
            toast.error(data.error + '')
        } else {
            setOpenConfModal(false)
            cb()
        }


    }

    return (
        <div className={"user-seeds"}>
            {!userSeeds || (userSeeds && !userSeeds.length) ? "No seeds found." : ""}
            {userSeeds && userSeeds.filter(seed => seed.userSeeds.count > 0).map(seed => {
                return (
                    <div key={seed.seeds.id} className={"market-seed-item"}>
                        <div className={"market-seed-title"}>
                            {seed.seeds.title}
                        </div>
                        <img src={import.meta.env.VITE_API_URL + seed.seeds.icon} className={"market-seed-icon"}
                             alt=""/>

                        <button className={"btn info  sm buy-seed-btn"} onClick={() => {
                            void handleSeed(Number(seed.seeds.id))
                        }}>Seed ({seed.userSeeds.count})
                        </button>

                    </div>
                )
            })}
        </div>
    )
}