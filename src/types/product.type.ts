import {IngredientTypesEnum} from "@/enums/IngredientTypesEnum";
import {SeedType, UserSeedType} from "@/types/seed.type";

export type ProductType = {
    id: number,
    title: string,
    icon: string,
    finalProduct: string,
    userProductTypes: IngredientTypesEnum
}

export type UserProductType = {
    id: number,
    userId: number,
    seedId: number,
    count: number,
    userProductTypes: IngredientTypesEnum
}

export type UserProductSeedType = {
    userProducts: UserProductType,
    seeds: SeedType,
    products: ProductType,
}

export type UserProductResponse = {
    items: UserProductSeedType[]
};


export type StorageProductResponse = {
    item: UserProductType
}