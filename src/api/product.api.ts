import {StorageProductResponse, UserProductResponse} from "@/types/product.type";
import api from "@/api/axios";

export async function getUserProducts(): Promise<UserProductResponse> {
    const response = await api.get<UserProductResponse>("/user-products");
    return response.data;
}



export async function sellUserProduct(id: number): Promise<StorageProductResponse> {
    const response = await api.get<StorageProductResponse>(`/market/sell-product/${id}`);
    return response.data;
}


export async function sellUserProductAll(id: number): Promise<StorageProductResponse> {
    const response = await api.get<StorageProductResponse>(`/market/sell-product-all/${id}`);
    return response.data;
}
