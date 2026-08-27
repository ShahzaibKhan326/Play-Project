import {
   HomeOutlined ,
   LikeOutlined ,
   HistoryOutlined,
   VideoCameraOutlined,
   FolderFilled,
   UsergroupAddOutlined,
   QuestionCircleOutlined,
   SettingOutlined
  } from "@ant-design/icons"

const navLinks = [
  {id:1 , icon:HomeOutlined , label:"Home" },
  {id:2 , icon:LikeOutlined , label:"Liked Videos"},
  {id:3 , icon:HistoryOutlined , label:"History"},
  {id:4 , icon:VideoCameraOutlined , label:"Your Videos"},
  {id:5 , icon:FolderFilled , label:"Library"},
  {id:6 , icon:UsergroupAddOutlined , label:"Following"},
]

const footerLinks = [
  {id:1 , icon:QuestionCircleOutlined , label:"Help"},
  {id:2 , icon:SettingOutlined , label:"Settings" },
]

export {navLinks , footerLinks}