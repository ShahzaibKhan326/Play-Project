import { Megaphone, Play  , Folder , Users} from 'lucide-react';

const emptyStates = [
  {
    id: 1,
    type:"videos",
    state:"view",
    // title: "No videos uploaded",
    // description:
    // "This page has yet to upload a video. Search another page in order to find more videos.",
    title: "No videos avaliable",
    description:
    "There are no videos here available. Please try to search some thing else.",
    icon:Play
  },
  {
    id: 2,
    type:"announcement",
    state:"view",
    title: "No Announcements",
    description:"This page has yet to make an Announcements.",
    icon:Megaphone,
  },
    {
    id: 3,
    type:"libraries",
    state:"view",
    title: "No libraries created",
    description:"This page has yet to libraries a video. Search another page in order to find more libraries.",
    icon:Folder,
  },
    {
    id: 4,
    type:"following",
    state:"view",
    title: "No people followed",
    description:"This page has yet to follow a new person. ",
    icon:Megaphone,
  },

  {
    id: 5,
    type:"videos",
    state:"edit",
    title: "No videos uploaded",
    description:
    "Click to upload new video. You have yet to upload a video. ",
    icon:Play
  },
  {
    id: 6,
    type:"announcement",
    state:"edit",
    title: "No Announcements",
    description:"This page has yet to make an Announcements.",
    icon:Megaphone,
  },
    {
    id: 7,
    type:"libraries",
    state:"edit",
    title: "No libraries created",
    description:"This page has yet to libraries a video. Search another page in order to find more libraries.",
    icon:Users,
  },
    {
    id: 8,
    type:"following",
    state:"edit",
    title: "No people followed",
    description:"This page has yet to follow a new person. ",
    icon:Megaphone,
  },
  {
  id:9,
  type: "video",
  state: "not-found",
  title: "Video not found",
  description: "The video you're looking for doesn't exist."
}
 

];

export default emptyStates;
