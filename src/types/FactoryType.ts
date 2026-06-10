export type FactoryType = {
    id: number,
    title: string,
    price: number,
    icon: string,
    availableFromLevel: number,
}

export type UserFactoryType = {
    id: number,
    userId: number,
    factoryId: number,
    recipeId: number,
    status: string,
    startedAt: Date | string,
    finishedAt: Date | string,
}

export type UserFactoriesType = {
    factories: FactoryType;
    userFactories: UserFactoryType
}

export type FactoriesResponse = {
    items: FactoryType[]
};

export type UserFactoriesResponse = {
    items: UserFactoriesType[]
};
