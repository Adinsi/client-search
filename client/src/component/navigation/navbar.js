import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LiveHelpRoundedIcon from "@mui/icons-material/LiveHelpRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

import { NavLink, useNavigate } from "react-router-dom";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/user.reducers";
import Notfound from "../pages/notfound";
import { Icon } from "@mui/material";

// const pages = ["Accueil", "Recherche", "Aide"];
const pages = [
  {
    nom: <HomeRoundedIcon />,
    link: "/home",
  },
  {
    nom: <AccountCircleIcon />,
    link: "/profil",
  },
  {
    nom: <SearchRoundedIcon />,
    link: "/search",
  },
  // {
  //   nom: <MailIcon />,
  //   link: "/message",
  // },
  // {
  //   nom: <LiveHelpRoundedIcon />,
  //   link: "/help",
  // },
  {
    nom: <MarkChatUnreadIcon />,
    link: "/message",
  },
];
const settings = [
  {
    nom: "Profile",
    link: "/profil",
  },
  // {
  //   nom: "Account",
  //   link: "/account",
  // },
  {
    nom: "Deconnecter",
  },
];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const dispatch = useDispatch();
  const history = useNavigate();
  const user = useSelector((state) => state.user.user);
  const sendlogOutRequest = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_URL_USER}/logout`,
      null,
      {
        withCredentials: true,
      }
    );
    if (res.status === 200) {
      return res;
    }
    return new Error("Déconnexion échoué, reprenez svp");
  };
  const handleLogOut = () => {
    sendlogOutRequest().then(() => {
      dispatch(logOut());
      history("/");
    });
  };
  return (
    <>
      {user ? (
        <>
          <AppBar position="sticky" sx={{ backgroundColor: "#0E1D34" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/home"
                  sx={{
                    mr: 2,
                    display: { xs: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <YoutubeSearchedForIcon />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      component={NavLink}
                      to={page.link}
                      key={page.link}
                      sx={{ marginRight: 1, color: "white", fontSize: "12px" }}
                      variant="outlined"
                    >
                      <Icon>{page.nom}</Icon>
                    </Button>
                  ))}
                </Box>

                {/* <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={user.picture} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) =>
                      setting.nom === "Deconnecter" ? (
                        <MenuItem
                          key={setting.link}
                          onClick={handleCloseUserMenu}
                        >
                          <Typography textAlign="center">
                            <NavLink onClick={handleLogOut} to={setting.link}>
                              {setting.nom}
                            </NavLink>
                          </Typography>
                        </MenuItem>
                      ) : (
                        <MenuItem
                          key={setting.link}
                          onClick={handleCloseUserMenu}
                        >
                          <Typography textAlign="center">
                            <NavLink to={setting.link}>{setting.nom}</NavLink>
                          </Typography>
                        </MenuItem>
                      )
                    )}
                  </Menu>
                </Box> */}
              </Toolbar>
            </Container>
          </AppBar>
        </>
      ) : (
        <>
          <Notfound />
        </>
      )}
    </>
  );
}
export default Navbar;
