import "./../App.css";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/sidebar/Sidebar";
import ContentContainer from "./ContentContainer";
import { useState } from "react";
import SidebarContainer from "./SidebarContainer";

function AppContainer() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <SidebarContainer>
        <Sidebar value={value} handleChange={handleChange} />
      </SidebarContainer>
      <ContentContainer />
    </MainLayout>
  );
}

export default AppContainer;
