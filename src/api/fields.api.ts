import {CollectUserFieldType, UserFieldsResponse} from "@/types/field.type";
import api from "@/api/axios";

export type BuyNewFieldResponse = {
    success: boolean
}


export async function getUserFields(): Promise<UserFieldsResponse> {
    const response = await api.get<UserFieldsResponse>("/fields");
    return response.data;
}


export async function collectUserField(fieldId: number): Promise<CollectUserFieldType> {
    const response = await api.get<CollectUserFieldType>(`/collect-user-field/${fieldId}`, );
    return response.data;
}



export async function getFieldPrice(): Promise<number> {
    const response = await api.get<number>("/field-price");
    return response.data;
}

export async function buyNewField(): Promise<BuyNewFieldResponse> {
    const response = await api.get<BuyNewFieldResponse>("/buy-new-field");
    return response.data;
}


