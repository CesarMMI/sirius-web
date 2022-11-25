export interface IFilter {
    order: {
        orderBy: string;
        desc: boolean;
    };
    search?: {
        field: string;
        value: string;
    };
}
