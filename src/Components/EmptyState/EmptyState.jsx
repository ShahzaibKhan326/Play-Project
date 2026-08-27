import "./EmptyState.css";

import emptyStates from "./emptystatedata.js";
import { WarningOutlined } from "@ant-design/icons";

function EmptyState({ type, state }) {
  const selectedState = emptyStates.find(
    (item) =>
      item.type.toLowerCase().trim() === type?.toLowerCase().trim() &&
      item.state.toLowerCase().trim() === state?.toLowerCase().trim()
  );

  if (!selectedState) {
    return (
      <div className="error">
        <WarningOutlined className="error-icon" />
        <h2>State Not Found</h2>
        <p>Check Props values</p>
      </div>
    );
  }

  const { icon: Icon, title, description } = selectedState;

  return (
    <div className="empty-state-container">
      <div className="empty-state">
        <div className="icon-container">
          <Icon className="empty-icon" />
        </div>

        <div className="group-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default EmptyState;