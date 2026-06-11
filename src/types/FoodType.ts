export type  FoodType =
    {
        id: number,
        title: string,
        price: number,
        energyPower: number
        icon: string
    }


export type  UserFoodType = {
    id: number,
    userId: number,
    foodId: number,
    count: number
}

export type UserFoodData = {
    foods: FoodType;
    userFoods: UserFoodType;
}

export type UserFoodResponse = {
    items: UserFoodData[]
}
export type FoodResponse = {
    items: FoodType[]
}

export type BuyFoodResponse = {
    items: FoodType
}

export type UseFoodResponse = {
    item: UserFoodData
}