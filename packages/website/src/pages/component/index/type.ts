// 菜单类型
export enum MenuTypeEnum {
    "name" = "name",
    "groupName" = "group-name",
    "groupTypeName" = "group-type-name",
}

// 菜单类型
export interface MenuItemObject {
    name: string;
    path?: string;
    children?: Array<MenuItemObject>;
    component?: any;
    type?: MenuTypeEnum | string;
}
