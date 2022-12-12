export interface INavbarItem {
    label: string;
    icon?: string;
    visible?: boolean;
    router?: string;
    action?: Function;
    children?: INavbarItem[];
}
