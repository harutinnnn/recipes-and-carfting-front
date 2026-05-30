export type User = {
    id: number;
    name: string;
    email: string;
    refreshToken: string;
    avatarUrl: string;
    gender: 'male' | 'female' | 'unknown';
    gameMoney: number;
    realMoney: number;
    level: number,
    xp: number;
    nextLevelXP: number;
    takeEnergyCollect: number;
    energy: number;
    isAdmin: boolean;
};
