import { useState } from "react";
import "./tabs.css";

export default function Tabs({ tabsData }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="tabs">
      <div className="tabs-container">
        {tabsData.map((item, index) => {
          return (
            <button
              className={`${currentTabIndex === index ? "active" : ""}`}
              onClick={() => setCurrentTabIndex(index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tabs-content">{tabsData[currentTabIndex].content}</div>
    </div>
  );
}
