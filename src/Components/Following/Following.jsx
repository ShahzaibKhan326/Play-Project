import "./Following.css";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

import oliviaAvatar from "../../assets/Avatars/oliviaAvatar.jpg";

const profiles = [
  {
    id: 1,
    name: "Olivia Martin",
    followers: "25K followers",
    subscribed: true,
  },
  {
    id: 2,
    name: "James Wilson",
    followers: "18K followers",
    subscribed: false,
  },
  {
    id: 3,
    name: "Sophia Brown",
    followers: "32K followers",
    subscribed: true,
  },
  {
    id: 4,
    name: "Daniel Smith",
    followers: "12K followers",
    subscribed: false,
  },
  {
    id: 5,
    name: "Emma Johnson",
    followers: "45K followers",
    subscribed: true,
  },
];

function Following() {
  return (
    <section className="following-section">

      <div className="following-search">
        <Input
          placeholder="Search profiles"
          prefix={<SearchOutlined />}
        />
      </div>

      <div className="following-list">

        {profiles.map((profile) => (
          <article className="following-profile" key={profile.id}>

            <Avatar source={oliviaAvatar} />

            <div className="following-profile-info">
              <h3>{profile.name}</h3>
              <p>{profile.followers}</p>
            </div>

            <Button
              text={profile.subscribed ? "Subscribed" : "Subscribe"}
              type={profile.subscribed ? "primary-btn" : "text-btn"}
              color={profile.subscribed ? "white" : "black"}
              className="subscribe-btn"
            />

          </article>
        ))}

      </div> 

    </section>
  );
}

export default Following;