import api from "@/api/axios";
import {BuyFoodResponse, FoodResponse, UseFoodResponse, UserFoodResponse} from "@/types/FoodType";


export async function getUserFoods(): Promise<UserFoodResponse> {
    const response = await api.get<UserFoodResponse>("/user-foods");
    return response.data;
}

export async function getFoods(): Promise<FoodResponse> {
    const response = await api.get<FoodResponse>("/foods");
    return response.data;
}

export async function buyFood(id: number): Promise<BuyFoodResponse> {
    const response = await api.get<BuyFoodResponse>(`/market/buy-food/${id}`);
    return response.data;
}

export async function _useUserFood(id: number): Promise<UseFoodResponse> {
    const response = await api.get<UseFoodResponse>(`/market/use-food/${id}`);
    return response.data;
}
