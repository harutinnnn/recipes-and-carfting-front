import {FieldsListComponent} from "@/components/fields/FieldsListCoponent";
import { PawPrint, Sprout} from "lucide-react";
import React, {useState} from "react";
import {MarketSeedsComponent} from "@/components/market/MarketSeedsComponent";
import {AnimalsListCoponent} from "@/components/fields/AnimalsListCoponent";

export const MainPage = () => {

    type componentType = 'plants' | 'animals';
    const [storageTypeComponent, setStorageTypeComponent] = useState<React.ReactNode>(<FieldsListComponent/>);
    const [activeComponent, setActiveComponent] = useState<componentType>('plants');

    const handleSwitchStoreComponent = (type: componentType) => {

        switch (type) {
            case 'plants':
                setStorageTypeComponent(<FieldsListComponent/>)
                setActiveComponent('plants');
                break;
            case 'animals':
                setStorageTypeComponent(<AnimalsListCoponent/>)
                setActiveComponent('animals');
                break

        }

    }


    return (

        <div>

            <div className="storage-cat-btn-block">

                <div className={'storage-cat-btn ' + (activeComponent === 'plants' ? 'active' : '')}
                     onClick={() => handleSwitchStoreComponent('plants')}><Sprout
                    size={30}/> <span>Plants</span></div>
                <div className={'storage-cat-btn ' + (activeComponent === 'animals' ? 'active' : '')}
                     onClick={() => handleSwitchStoreComponent('animals')}
                ><PawPrint
                    size={30}/> <span>Animals</span></div>

            </div>

            {storageTypeComponent}


        </div>
    )
}