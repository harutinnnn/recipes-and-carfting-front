import {IngredientTypesEnum} from "@/enums/IngredientTypesEnum";

export type SeedType = {
    id: number,
    productId: number,
    title: number,
    price: number,
    minSellPrice: number,
    icon: string,
    availableLevel: number,
    xpOnCollect: number,
    takeEnergyCollect: number,
    collectionTime: number,
}

export type SeedsProgressImageType = {
    id: number,
    title: string,
    icon: string,
    userProductTypes: IngredientTypesEnum
}