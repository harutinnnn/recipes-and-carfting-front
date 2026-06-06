import api from "@/api/axios";
import {
    BuySeedProductTypeResponse,
    SeedProductTypeResponse,
    UserSeedsResponse,
    UserSeedType
} from "@/types/seed.type";

export async function getUserSeeds(): Promise<UserSeedsResponse> {
    const response = await api.get<UserSeedsResponse>("/user-seeds");
    return response.data;
}

export async function getSeeds(): Promise<SeedProductTypeResponse> {
    const response = await api.get<SeedProductTypeResponse>("/seeds");
    return response.data;
}


export async function buySeed(id: number): Promise<BuySeedProductTypeResponse> {
    const response = await api.get<BuySeedProductTypeResponse>(`/market/buy-seed/${id}`);
    return response.data;
}


export async function setUserSeed(data: any): Promise<UserSeedType> {
    const response = await api.post<UserSeedType>("/set-user-seed", data);
    return response.data;
}

