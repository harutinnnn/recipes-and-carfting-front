import {UserFieldsResponse} from "@/types/field.type";
import api from "@/api/axios";

export async function getUserFields(): Promise<UserFieldsResponse> {
    const response = await api.get<UserFieldsResponse>("/fields");
    return response.data;
}
