import {CircleDollarSign} from "lucide-react";
import {ConfirmModal} from "@/components/ConfirmModal";
import {useAuth} from "@/hooks/useAuth";
import {useEffect, useRef, useState} from "react";
import {getUserProducts, sellUserProduct, sellUserProductAll} from "@/api/product.api";
import {UserProductSeedType} from "@/types/product.type";
import toast from "react-hot-toast";

export const StorageSeedsComponent = () => {


    const {refreshUser} = useAuth();

    const elementRef = useRef<HTMLDivElement | null>(null)
    const [fieldsWidth, setFieldsWidth] = useState<number>(0)

    const [userProducts, setUserProducts] = useState<UserProductSeedType[]>([]);
    const [openConfModal, setOpenConfModal] = useState(false);
    const [productId, setProductId] = useState<number | null>(null);
    const [productTitle, setProductTitle] = useState<string>("");

    const [sellAll, setSellAll] = useState<boolean>(false);

    const getUserProductsHandle = async () => {

        const data = await getUserProducts();
        setUserProducts(data.items)

    }

    useEffect(() => {
        (async () => {
            await getUserProductsHandle()
        })()
    }, [])

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


    const sellProduct = async (productId: number) => {

        let data = null;

        if (sellAll) {
            data = await sellUserProductAll(productId)
        } else {
            data = await sellUserProduct(productId)
        }

        if ("error" in data) {
            toast.error(data?.error + "")
        } else {
            toast.success('The product successfully sell!')
            await getUserProductsHandle()
            await refreshUser();
            setOpenConfModal(false);
        }
    }


    return (
        <div>


            <div className={"market-seeds-list"} ref={elementRef}>
                {userProducts && userProducts.filter(product => product.userProducts.count > 0).map(product => {
                    return (
                        <div className={'market-seed-item'} style={{height: `${fieldsWidth}px`}} key={product.products.id}>
                            <div className={"market-seed-title"}>
                                <span>{product.products.title}</span> - <span>{product.seeds.minSellPrice}</span>
                                <CircleDollarSign
                                    size={16}/>
                            </div>

                            <img src={import.meta.env.VITE_API_URL + product.products.finalProduct}
                                 alt={product.products.title.toString()}
                                 className={"market-seed-icon"}/>
                            <div className={"sell-btn-group"}>
                                <button className={"btn info  xs sell-product-btn"} onClick={() => {
                                    setOpenConfModal(true);
                                    setProductId(product.userProducts.id)
                                    setProductTitle(product.products.title)
                                    setSellAll(false)
                                }}>Cell product ({product.userProducts.count})
                                </button>
                                <button className={"btn info  xs sell-product-btn"} onClick={() => {
                                    setOpenConfModal(true);
                                    setProductId(product.userProducts.id)
                                    setProductTitle(product.products.title)
                                    setSellAll(true)
                                }}>All
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <ConfirmModal
                title={`Are you sure do buy a <strong> ${productTitle} </strong> seed?`}
                // description={""}
                open={openConfModal}
                onCancel={() => setOpenConfModal(false)}
                onConfirm={() => {
                    void sellProduct(Number(productId))
                }}
            />
        </div>
    )

}