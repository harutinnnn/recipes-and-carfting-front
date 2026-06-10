import {StorageSeedsComponent} from "@/components/storage/StorageSeedsComponent";
import {Ham, Hamburger, Sprout} from "lucide-react";
import React, {useEffect, useState} from "react";
import {StorageAnimalProductsComponent} from "@/components/storage/StorageAnimalProductsComponent";
import {StorageFoodComponent} from "@/components/storage/StorageFoodComponent";

export const StoragePage = () => {


    type componentType = 'seeds' | 'animal_products' | 'food';
    const [storageTypeComponent, setStorageTypeComponent] = useState<React.ReactNode>(<StorageSeedsComponent/>);
    const [activeComponent, setActiveComponent] = useState<componentType>('seeds');


    useEffect(() => {

    })


    const handleSwitchStoreComponent = (type: componentType) => {

        switch (type) {
            case 'seeds':
                setStorageTypeComponent(<StorageSeedsComponent/>)
                setActiveComponent('seeds');
                break;
            case 'animal_products':
                setStorageTypeComponent(<StorageAnimalProductsComponent/>)
                setActiveComponent('animal_products');
                break
            case 'food':
                setStorageTypeComponent(<StorageFoodComponent/>)
                setActiveComponent('food');
                break
        }

    }


    return (

        <>

            <h1 className={"page-title"}>Storage</h1>

            <div className="storage-cat-btn-block">

                <div className={'storage-cat-btn ' + (activeComponent === 'seeds' ? 'active' : '')}
                     onClick={() => handleSwitchStoreComponent('seeds')}><Sprout
                    size={38}/> <span>Crops</span></div>
                <div className={'storage-cat-btn ' + (activeComponent === 'animal_products' ? 'active' : '')}
                     onClick={() => handleSwitchStoreComponent('animal_products')}
                ><Ham
                    size={38}/> <span>Animal Products</span></div>
                <div className={'storage-cat-btn ' + (activeComponent === 'food' ? 'active' : '')}
                     onClick={() => handleSwitchStoreComponent('food')}
                ><Hamburger
                    size={38}/> <span>Prepared Food</span></div>

            </div>

            {storageTypeComponent}
            {/*<StorageSeedsComponent/>*/}
        </>
    )
}