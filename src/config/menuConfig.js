import {
  AppstoreOutlined,
  BarsOutlined,
  ToolOutlined,
  UserOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const menuList = [
  {
    title: "首页", // 菜单标题名称
    key: "home", // 对应的path
    path: "/admin/home", // 对应的path
    icon: <HomeOutlined />, // 图标名称
    public: true, // 公开的
  },
  {
    title: "商品",
    key: "pro_about",
    icon: <AppstoreOutlined />,
    children: [
      // 子菜单列表
      {
        title: "品类管理",
        key: "category",
        path: "/admin/pro_about/category",
        icon: <BarsOutlined />,
      },
      {
        title: "商品管理",
        key: "product",
        path: "/admin/pro_about/product",
        icon: <ToolOutlined />,
      },
    ],
  },

  {
    title: "用户管理",
    key: "user",
    path: "/admin/user",
    icon: <UserOutlined />,
  },
  {
    title: "角色管理",
    path: "/admin/role",
    key: "role",
    icon: <AreaChartOutlined />,
  },

  {
    title: "图形图表",
    key: "charts",
    path: "admin/charts",
    icon: <PieChartOutlined />,
    children: [
      {
        title: "柱形图",
        key: "bar",
        path: "admin/charts/bar",
        icon: <BarChartOutlined />,
      },
      {
        title: "折线图",
        key: "line",
        path: "admin/charts/line",
        icon: <LineChartOutlined />,
      },
      {
        title: "饼图",
        key: "pie",
        path: "admin/charts/pie",
        icon: <PieChartOutlined />,
      },
    ],
  },
];

export default menuList;
