import {useEffect, useRef, useState} from "react";
import {FoodType} from "@/types/FoodType";
import {buyFood, getFoods} from "@/api/food.api";
import {CircleDollarSign} from "lucide-react";
import {ConfirmModal} from "@/components/ConfirmModal";
import {useAuth} from "@/hooks/useAuth";
import toast from "react-hot-toast";

export const MarketFoodComponent = () => {

    const {refreshUser} = useAuth();
    const elementRef = useRef<HTMLDivElement | null>(null)
    const [fieldsWidth, setFieldsWidth] = useState<number>(0)
    const [foods, setFoods] = useState<FoodType[]>([])

    const [seedId, setSeedId] = useState<number | null>(null);
    const [seedTitle, setSeedTitle] = useState<string>("");
    const [openConfModal, setOpenConfModal] = useState(false);

    const getFoodsHandle = async () => {
        const data = await getFoods();
        setFoods(data.items)
    }

    useEffect(() => {
        (async () => {
            await getFoodsHandle()
        })()
    }, [setFoods])

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

    const handleBuySeed = async (seedId: number) => {


        const newFood = await buyFood(seedId)

        if ("error" in newFood) {

            toast.error(newFood?.error + "")
        } else {
            toast.success('Successfully buying food')
            await refreshUser();
        }
    };

    return (
        <div>
            <div className={"market-seeds-list"} ref={elementRef}>

                {foods && foods.map(food => {
                    return (
                        <div className={'market-seed-item'} style={{height: `${fieldsWidth}px`}} key={food.title}>
                            <div className={"market-seed-title"}>
                                <span>{food.title}</span> - <span>{food.price}</span> <CircleDollarSign
                                size={16}/>
                            </div>

                            <img src={import.meta.env.VITE_API_URL + food.icon} alt={food.title.toString()}
                                 className={"market-seed-icon"}/>
                            <button className={"btn info  sm buy-seed-btn"} onClick={() => {
                                setOpenConfModal(true);
                                setSeedId(food.id)
                                setSeedTitle(food.title)
                            }}>Buy Food
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