import {useEffect, useRef, useState} from "react";
import {FactoryType} from "@/types/FactoryType";
import {buyFactory, getFactories} from "@/api/factory.api";
import {CircleDollarSign} from "lucide-react";
import {useAuth} from "@/hooks/useAuth";
import toast from "react-hot-toast";
import {ConfirmModal} from "@/components/ConfirmModal";

export const MarketFactoriesComponent = () => {

    const {refreshUser} = useAuth();

    const elementRef = useRef<HTMLDivElement | null>(null)
    const [fieldsWidth, setFieldsWidth] = useState<number>(0)

    const [factoryId, setFactoryId] = useState<number | null>(null);
    const [factoryTitle, setFactoryIdTitle] = useState<string>("");
    const [openConfModal, setOpenConfModal] = useState(false);


    const [factories, setFactories] = useState<FactoryType[]>([])

    const handleGetFactories = async () => {

        const data = await getFactories();
        setFactories(data.items)

    }

    useEffect(() => {
        (async () => {
            await handleGetFactories()
        })()
    },[setFactories])


    useEffect(() => {

        const updateWidth = () => {
            if (elementRef.current) {
                setFieldsWidth((elementRef.current.offsetWidth / 2));
            }
        };


        updateWidth(); // initial width
        window.addEventListener('resize', updateWidth);


        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    });

    const handleBuyFactory = async (seedId: number) => {


        const newSeed = await buyFactory(seedId)

        if ("error" in newSeed) {

            toast.error(newSeed?.error + "")
        } else {
            toast.success('Successfully buying factory')
            await refreshUser();
            // setOpenConfModal(false);
        }
    };


    return (
        <>
            <h3 className="inner-title">Factories</h3>

            <div className={"market-factories-list"} ref={elementRef}>
                {factories && factories.map(factory => (
                    <div className={'market-seed-item'} style={{height: `${fieldsWidth}px`}} key={factory.title}>
                        <div className={"market-seed-title"}>
                            <span>{factory.title}</span> - <span>{factory.price}</span> <CircleDollarSign
                            size={16}/>
                        </div>

                        <img src={import.meta.env.VITE_API_URL + factory.icon} alt={factory.title.toString()}
                             className={"market-seed-icon"}/>
                        <button className={"btn success  sm buy-seed-btn"} onClick={() => {
                            setOpenConfModal(true);
                            setFactoryId(factory.id)
                            setFactoryIdTitle(factory.title)
                        }}>Buy Factory
                        </button>
                    </div>
                ))}
            </div>

            <ConfirmModal
                title={`Are you sure do buy a <strong> ${factoryTitle} </strong> seed?`}
                open={openConfModal}
                onCancel={() => setOpenConfModal(false)}
                onConfirm={() => {
                    void handleBuyFactory(Number(factoryId))
                }}
            />

        </>
    )
}