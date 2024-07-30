import Tabs from "./components/Tabs";
import "./styles.css";

const tabsData = [
  {
    label: "Profile",
    content: <div>Profile Info content</div>,
  },
  {
    label: "Dashboard",
    content: <div>Dashboard Info content</div>,
  },
  {
    label: "Profile",
    content: <div>Profile Info content</div>,
  },
  {
    label: "Settings",
    content: <div>Settings Info content</div>,
  },
  {
    label: "Invoice",
    content: <div>Invoice Info content</div>,
  },
];

export default function App() {
  return <Tabs tabsData={tabsData} />;
}
