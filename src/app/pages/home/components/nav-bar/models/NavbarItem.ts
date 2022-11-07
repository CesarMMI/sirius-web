export interface INavbarItem {
    label: string;
    icon?: string;
    router?: string;
    action?: Function;
    children?: INavbarItem[];
}
