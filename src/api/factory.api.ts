import api from "@/api/axios";
import {FactoriesResponse, UserFactoriesResponse} from "@/types/FactoryType";
import {BuySeedProductTypeResponse} from "@/types/seed.type";


export async function getFactories(): Promise<FactoriesResponse> {
    const response = await api.get<FactoriesResponse>("/factory");
    return response.data;
}

export async function getUserFactories(): Promise<UserFactoriesResponse> {
    const response = await api.get<UserFactoriesResponse>("/user-factories");
    return response.data;
}

export async function buyFactory(id: number): Promise<BuySeedProductTypeResponse> {
    const response = await api.get<BuySeedProductTypeResponse>(`/factory/buy-factory/${id}`);
    return response.data;
}
