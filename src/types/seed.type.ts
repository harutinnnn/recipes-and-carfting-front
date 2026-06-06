import {IngredientTypesEnum} from "@/enums/IngredientTypesEnum";
import {ProductType} from "@/types/product.type";

export type SeedType = {
    id: number,
    productId: number,
    title: string,
    price: number,
    minSellPrice: number,
    icon: string,
    availableLevel: number,
    xpOnCollect: number,
    takeEnergyCollect: number,
    collectionTime: number,
}


export type SeedProductType = {
    products: ProductType,
    seeds: SeedType,
}

export type SeedsProgressImageType = {
    id: number,
    title: string,
    icon: string,
    userProductTypes: IngredientTypesEnum
}

export type UserSeedType = {
    id: number,
    userId: number,
    seedId: number,
    count: number,
}


export type UserSeedDataType = {
    seeds: SeedType,
    products: ProductType
    userSeeds: UserSeedType
}

export type UserSeedsResponse = {
    items: UserSeedDataType[]
};
export type SeedProductTypeResponse = {
    items: SeedProductType[]
};
export type BuySeedProductTypeResponse = {
    items: SeedProductType
};