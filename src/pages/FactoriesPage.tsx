import {useEffect, useState} from "react";
import {getUserFactories} from "@/api/factory.api";
import {UserFactoriesType} from "@/types/FactoryType";
import toast from "react-hot-toast";

export const FactoriesPage = () => {


    const [userFactories, setUserFactories] = useState<UserFactoriesType[]>([]);

    const getUserFactoriesHandle = async () => {

        const data = await getUserFactories();

        if ("error" in data) {

            toast.error(data?.error + "")
        } else {
            toast.success('Successfully buying seed')
            setUserFactories(data.items)
        }
    }


    useEffect(() => {
        (async () => {
            await getUserFactoriesHandle()
        })()
    }, [])

    return (

        <div>

            <h1>Factories</h1>

            <div className="user-factories">
                {userFactories && userFactories.map(userFactory => {
                    return (
                        <div className={"user-factory-item"}>
                            <div className="img-container">
                                <img src={import.meta.env.VITE_API_URL + userFactory.factories.icon} alt=""/>
                                <div className="user-factory-title">{userFactory.factories.title}</div>
                            </div>


                        </div>
                    )
                })}
            </div>

        </div>
    )
}