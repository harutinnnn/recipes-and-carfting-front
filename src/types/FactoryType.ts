
export type FactoryType = {
    id: number,
    title: string,
    price: number,
    icon: string,
    availableFromLevel: number,
}

export type FactoriesResponse = {
    items: FactoryType[]
};
