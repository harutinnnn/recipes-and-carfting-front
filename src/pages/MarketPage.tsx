import {MarketSeedsComponent} from "@/components/market/MarketSeedsComponent";
import {MarketFactoriesComponent} from "@/components/market/MarketFactoriesComponent";
import {Factory, Hamburger, Sprout} from "lucide-react";
import React, {useState} from "react";
import {StorageFoodComponent} from "@/components/storage/StorageFoodComponent";
import {MarketFoodComponent} from "@/components/market/MarketFoodComponent";

export const MarketPage = () => {

    type componentType = 'seeds' | 'factories' | 'foods';
    const [storageTypeComponent, setStorageTypeComponent] = useState<React.ReactNode>(<MarketSeedsComponent/>);
    const [activeComponent, setActiveComponent] = useState<componentType>('seeds');

    const handleSwitchStoreComponent = (type: componentType) => {

        switch (type) {
            case 'seeds':
                setStorageTypeComponent(<MarketSeedsComponent/>)
                setActiveComponent('seeds');
                break;
            case 'factories':
                setStorageTypeComponent(<MarketFactoriesComponent/>)
                setActiveComponent('factories');
                break
            case 'foods':
                setStorageTypeComponent(<MarketFoodComponent/>)
                setActiveComponent('foods');
                break
        }

    }

    return (

        <div>
            <h1 className={"page-title"}>Market</h1>


            <div className="storage-cat-btn-block">

                <div className={'storage-cat-btn ' + (activeComponent === 'seeds' ? 'active' : '')}
                     onClick={() => handleSwitchStoreComponent('seeds')}><Sprout
                    size={30}/> <span>Seeds</span></div>
                <div className={'storage-cat-btn ' + (activeComponent === 'factories' ? 'active' : '')}
                     onClick={() => handleSwitchStoreComponent('factories')}
                ><Factory
                    size={30}/> <span>Factories</span></div>
                <div className={'storage-cat-btn ' + (activeComponent === 'foods' ? 'active' : '')}
                     onClick={() => handleSwitchStoreComponent('foods')}
                ><Hamburger
                    size={30}/> <span>Food</span></div>

            </div>

            {storageTypeComponent}

        </div>
    )
}