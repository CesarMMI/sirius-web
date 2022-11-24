export interface IFilterEvent {
    order: {
        orderBy: string;
        desc: boolean;
    };
    search: {
        field: string;
        value: string;
    };
}
