import {useEffect, useState} from "react";
import {SeedProductType} from "@/types/seed.type";
import {buySeed, getSeeds} from "@/api/seeds.api";
import {ConfirmModal} from "@/components/ConfirmModal";
import toast from "react-hot-toast";
import {useAuth} from "@/hooks/useAuth";

export const StorePage = () => {

    const {refreshUser} = useAuth();

    const [seeds, setSeeds] = useState<SeedProductType[]>([]);
    const [seedId, setSeedId] = useState<number | null>(null);
    const [seedTitle, setSeedTitle] = useState<string>("");
    const [openConfModal, setOpenConfModal] = useState(false);


    const getSeedsHandle = async () => {

        const data = await getSeeds();
        setSeeds(data.items)

    }

    useEffect(() => {
        (async () => {
            await getSeedsHandle()
        })()
    }, [setSeeds])


    const handleBuySeed = async (seedId: number) => {


        const newSeed = await buySeed(seedId)

        if ("error" in newSeed) {

            toast.error(newSeed?.error + "")
        } else {
            toast.success('Successfully buying seed')
            await refreshUser();
        }
    };

    return (

        <div>
            <h1 className={"page-title"}>Store</h1>

            <div className={"market-seeds-list"}>

                {seeds && seeds.map(seed => {
                    return (
                        <div className={'market-seed-item'}>
                            <div className={"market-seed-title"}>
                                {seed.seeds.title}
                            </div>

                            <img src={import.meta.env.VITE_API_URL + seed.seeds.icon} alt={seed.seeds.title.toString()}
                                 className={"market-seed-icon"}/>
                            <button className={"btn info  sm buy-seed-btn"} onClick={() => {
                                setOpenConfModal(true);
                                setSeedId(seed.seeds.id)
                                setSeedTitle(seed.seeds.title)
                            }}>Buy Seed
                            </button>
                        </div>
                    )
                })}

            </div>

            <ConfirmModal
                title={`Are you sure do buy a <strong> ${seedTitle} </strong> seed?`}
                // description={""}
                open={openConfModal}
                onCancel={() => setOpenConfModal(false)}
                onConfirm={() => {
                    void handleBuySeed(Number(seedId))
                }}
            />

        </div>
    )
}