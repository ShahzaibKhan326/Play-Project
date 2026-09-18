import {
  HomeOutlined,
  LikeOutlined,
  HistoryOutlined,
  VideoCameraOutlined,
  FolderFilled,
  UsergroupAddOutlined,
  QuestionCircleOutlined,
  SettingOutlined
} from "@ant-design/icons";

const navLinks = [
  {
    id: 1,
    icon: HomeOutlined,
    label: "Home",
    path: "/"
  },
  {
    id: 2,
    icon: LikeOutlined,
    label: "Liked Videos",
    path: ""
  },
  {
    id: 3,
    icon: HistoryOutlined,
    label: "History",
    path: ""
  },
  {
    id: 4,
    icon: VideoCameraOutlined,
    label: "My Content",
    path: "/profile"
  },
  {
    id: 5,
    icon: FolderFilled,
    label: "Collection",
    path: ""
  },
  {
    id: 6,
    icon: UsergroupAddOutlined,
    label: "Subscriber",
    path: "/profile/following"
  }
];

const footerLinks = [
  {
    id: 1,
    icon: QuestionCircleOutlined,
    label: "Support",
    path: ""
  },
  {
    id: 2,
    icon: SettingOutlined,
    label: "Settings",
    path: ""
  }
];

export { navLinks, footerLinks };