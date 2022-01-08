export interface IGenericObject {
    [key: string]: any;
}

export type OptionalType<T> = T | null

export interface IPagination {
    page?: number,
    size?: number    
}