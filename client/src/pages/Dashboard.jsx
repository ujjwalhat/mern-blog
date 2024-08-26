import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/*SIDEBAR */}
        <DashSidebar />
      </div>
      {/*Profile */}
      {tab === "profile" && <DashProfile />}
      {/*Posts */}
      {tab === "posts" && <DashPosts />}
      {/*Users */}
      {tab === "users" && <DashUsers />}
      {/*Comment */}
      {tab === "comments" && <DashComments />}
      {/*dashboard comp */}
      {tab === "dash" && <DashboardComp />}
      {/* {!tab &&  <div className="flex-grow flex justify-center items-center font-serif text-6xl">Welcome to dashboard </div>} */}
     
    </div>
  );
};

export default Dashboard;
