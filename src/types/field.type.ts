import {FieldStatusEnum} from "@/enums/FieldStatusEnum";
import {SeedsProgressImageType, SeedType} from "@/types/seed.type";
import {ProductType} from "@/types/product.type";

export type FieldType = {
    id: number,
    userId: number,
    seedId: number | null,
    status: FieldStatusEnum
    startedAt: Date | string,
    finishedAt: Date | string,
}


export type FieldItem = {
    userFields: FieldType,
    seeds: SeedType,
    products: ProductType,
    seedsProgressImage: SeedsProgressImageType
}

export type UserFieldsResponse = {
    items: FieldItem[]
};