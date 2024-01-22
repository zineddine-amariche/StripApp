import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBare";
import Navbar from "./Navbar";
import { Stack } from "@mui/system";

const SidebarNavbarWrapper = () => {
  let data = {};
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!isNonMobile) {
      setIsSidebarOpen(false);
    } else if (isNonMobile) {
      setIsSidebarOpen(true);
    }
  }, [isNonMobile]);

  return (
    <Box display={"flex"} width="100%" height="100%">
      <Sidebar
        user={data}
        isNonMobile={isNonMobile}
        drawerWidth={isSidebarOpen ? "240px" : "70px"}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type={"secondary"}
      />
      <Stack flexGrow={1} >
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Stack>
    </Box>
  );
};

export default SidebarNavbarWrapper;
