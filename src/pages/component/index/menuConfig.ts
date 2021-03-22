import { MenuItemObject } from "./type";
const menuList: Array<MenuItemObject> = [
    {
        name: "开发指南",
        children: [
            {
                path: "/installation",
                name: "安装",
                component: require("../button/index"),
            },
            {
                path: "/quickstart",
                name: "快速上手",
            },
            {
                path: "/transition",
                name: "内置过渡动画",
            },
        ],
    },
    {
        name: "组件",
        children: [
            {
                name: "Basic",
                children: [
                    {
                        path: "/layout",
                        name: "Layout 布局",
                    },
                    {
                        path: "/container",
                        name: "Container 布局容器",
                    },
                    {
                        path: "/color",
                        name: "Color 色彩",
                    },
                    {
                        path: "/typography",
                        name: "Typography 字体",
                    },
                    {
                        path: "/border",
                        name: "Border 边框",
                    },
                    {
                        path: "/icon",
                        name: "Icon 图标",
                    },
                    {
                        path: "/button",
                        name: "Button 按钮",
                    },
                    {
                        path: "/link",
                        name: "Link 文字链接",
                    },
                ],
            },
            {
                name: "Form",
                children: [
                    {
                        path: "/table",
                        name: "Table表格",
                    },
                    {
                        path: "/radio",
                        name: "Radio 单选框",
                    },
                    {
                        path: "/checkbox",
                        name: "Checkbox 多选框",
                    },
                    {
                        path: "/input",
                        name: "Input 输入框",
                    },
                    {
                        path: "/input-number",
                        name: "InputNumber 计数器",
                    },
                    {
                        path: "/select",
                        name: "Select 选择器",
                    },
                    {
                        path: "/cascader",
                        name: "Cascader 级联选择器",
                    },
                    {
                        path: "/switch",
                        name: "Switch 开关",
                    },
                    {
                        path: "/slider",
                        name: "Slider 滑块",
                    },
                    {
                        path: "/upload",
                        name: "Upload 上传",
                    },
                    {
                        path: "/rate",
                        name: "Rate 评分",
                    },
                    {
                        path: "/color-picker",
                        name: "ColorPicker 颜色选择器",
                    },
                    {
                        path: "/transfer",
                        name: "Transfer 穿梭框",
                    },
                    {
                        path: "/form",
                        name: "Form 表单",
                    },
                ],
            },
            {
                name: "Data",
                children: [
                    {
                        path: "/tag",
                        name: "Tag 标签",
                    },
                    {
                        path: "/progress",
                        name: "Progress 进度条",
                    },
                    {
                        path: "/tree",
                        name: "Tree 树形控件",
                    },
                    {
                        path: "/pagination",
                        name: "Pagination 分页",
                    },
                    {
                        path: "/badge",
                        name: "Badge 标记",
                    },
                    {
                        path: "/avatar",
                        name: "Avatar 头像",
                    },
                ],
            },
            {
                name: "Notice",
                children: [
                    {
                        path: "/alert",
                        name: "Alert 警告",
                    },
                    {
                        path: "/loading",
                        name: "Loading 加载",
                    },
                    {
                        path: "/message",
                        name: "Message 消息提示",
                    },
                    {
                        path: "/message-box",
                        name: "MessageBox 弹框",
                    },
                    {
                        path: "/notification",
                        name: "Notification 通知",
                    },
                ],
            },
            {
                name: "Navigation",
                children: [
                    {
                        path: "/menu",
                        name: "NavMenu 导航菜单",
                    },
                    {
                        path: "/tabs",
                        name: "Tabs 标签页",
                    },
                    {
                        path: "/breadcrumb",
                        name: "Breadcrumb 面包屑",
                    },
                    {
                        path: "/page-header",
                        name: "PageHeader 页头",
                    },
                    {
                        path: "/dropdown",
                        name: "Dropdown 下拉菜单",
                    },
                    {
                        path: "/steps",
                        name: "Steps 步骤条",
                    },
                ],
            },
            {
                name: "Others",
                children: [
                    {
                        path: "/dialog",
                        name: "Dialog 对话框",
                    },
                    {
                        path: "/tooltip",
                        name: "Tooltip 文字提示",
                    },
                    {
                        path: "/popover",
                        name: "Popover 弹出框",
                    },
                    {
                        path: "/popconfirm",
                        name: "Popconfirm 气泡确认框",
                    },
                    {
                        path: "/card",
                        name: "Card 卡片",
                    },
                    {
                        path: "/carousel",
                        name: "Carousel 走马灯",
                    },
                    {
                        path: "/collapse",
                        name: "Collapse 折叠面板",
                    },
                    {
                        path: "/timeline",
                        name: "Timeline 时间线",
                    },
                    {
                        path: "/divider",
                        name: "Divider 分割线",
                    },
                    {
                        path: "/calendar",
                        name: "Calendar 日历",
                    },
                    {
                        path: "/image",
                        name: "Image 图片",
                    },
                    {
                        path: "/backtop",
                        name: "Backtop 回到顶部",
                    },
                    {
                        path: "/infiniteScroll",
                        name: "InfiniteScroll 无限滚动",
                    },
                    {
                        path: "/drawer",
                        name: "Drawer 抽屉",
                    },
                ],
            },
        ],
    },
];
export default menuList;