import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { ChevronRightOutlined, HomeOutlined } from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import CustDrawer from "./components/Drawer";
import FlexBetween from "../../FlexBetween";
import { Person } from "@material-ui/icons";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Profile",
    icon: <Person />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      <CustDrawer
        user={user}
        drawerWidth={drawerWidth}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNonMobile={isNonMobile}
      >
        <Box width="100%">
          <Header isSidebarOpen={isSidebarOpen} />
        </Box>
        <ListItems
          navItems={navItems}
          setActive={setActive}
          active={active}
          isSidebarOpen={isSidebarOpen}
          navigate={navigate}
        />
      </CustDrawer>
    </Box>
  );
};

export default Sidebar;

const Header = ({ isSidebarOpen }) => {
  const theme = useTheme();

  return (
    <>
      {isSidebarOpen && (
        <Box m="2rem 2rem 1.4rem 3rem">
          <FlexBetween color={theme.palette.primary.light}>
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Typography variant="h4" fontWeight="bold">
                E-LEARNING
              </Typography>
            </Box>
          </FlexBetween>
        </Box>
      )}
      {!isSidebarOpen && (
        <Box
          m="2rem 0rem 1.4rem 20px"
          display={"flex"}
          alignItems="center"
          component={"img"}
          src={logo}
          width={"30px"}
          height="30px"
        />
      )}
    </>
  );
};

const ListItems = ({
  navItems,
  setActive,
  active,
  isSidebarOpen,
  navigate,
}) => {
  const theme = useTheme();

  return (
    <List>
      {navItems.map(({ text, icon }) => {
        if (!icon) {
          return (
            <PrimaryText
              fontWeight={"500"}
              fontSize={"25px"}
              text={text}
              color={theme.palette.primary.light}
              cursor
            />
          );
        }
        const lcText = text.toLowerCase();

        return (
          <ListItem
            key={text}
            disablePadding
            sx={{
              backgroundColor: active === lcText ? "#0004" : "",
              color: theme.palette.primary.light,

              "&:hover": {
                color: theme.palette.primary.light,
              },
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(`/${lcText}`);
                setActive(lcText);
              }}
            >
              <ListItemIcon
                sx={{
                  ml: !isSidebarOpen ? ".6rem" : "2rem",
                  color: theme.palette.primary.light,
                }}
              >
                {icon}
              </ListItemIcon>

              <ListItemText primary={text} />

              {active === lcText && (
                <ChevronRightOutlined sx={{ ml: "auto" }} />
              )}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
