import React, { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import swal from 'sweetalert';

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SubjectIcon from "@mui/icons-material/Subject";
import CancelIcon from "@mui/icons-material/Cancel";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import PersonIcon from "@mui/icons-material/Person";
import LockResetIcon from "@mui/icons-material/LockReset";
import { styled, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ListItem } from "@material-ui/core";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: 25,
  color: theme.palette.text.secondary,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));


export default function Profile() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  const params = useLocation();
  console.log(params)
  useEffect(()=>{
      console.log(currentUser.subject.filter(item => item.id_sub === ''));
  } , [])
  const moomoo = e => {
    const {value , name} = e.target;
    setSubjectData({...subjectData , [name]:value});
  }
  
  const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")));
    
  const [subjectData, setSubjectData] = useState({ id_sub: "", section: "" , name:'', section:''});
   
  const mamaa = e => {
    e.preventDefault();
    try{
        axios.post(`http://192.168.1.2:9999/api/subject/find/${subjectData.id_sub}`)
        .then(result=> {
          if(result.data){
            axios.post(`http://192.168.1.2:9999/api/users/chk/subject/${currentUser._id}/${subjectData.id_sub}`)
            .then((res)=>{
              window.location.href = process.env.PUBLIC_URL + '/cfedit?subjectID=' + result.data.id_sub
            })
          }
          else{
            swal('Error' , "This Subject not Found" , "error").then(()=>{
              return;
            
          })
        }
        })
    }catch(e){
        console.error(e.message);
    }
  }

  return (
    <>
      <Container>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open} sx={{ bgcolor: "orange" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Student Panel
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Add Subject", "Change section", "withdraw", "Profile"].map(
                (text, index) => (
                  <ListItem
                    button
                    component="a"
                    href={`${process.env.PUBLIC_URL}/${text
                      .split(" ")
                      .join("")
                      .toLowerCase()}`}
                    key={text}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {/* <InboxIcon /> */}
                      {text === "Add Subject" ? (
                        <SubjectIcon />
                      ) : text === "Change section" ? (
                        <ChangeCircleIcon />
                      ) : text === "withdraw" ? (
                        <CancelIcon />
                      ) : text === "Profile" ? (
                        <PersonIcon />
                      ) : null}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["Change Password", "Logout"].map((text, index) => (
                <ListItemButton
                component="a"
                    href={`${process.env.PUBLIC_URL}/${text
                      .split(" ")
                      .join("")
                      .toLowerCase()}`}
                    key={text}
                  
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text === "Change Password" ? (
                      <LockResetIcon />
                    ) : text === "Logout" ? (
                      <LogoutIcon />
                    ) : null}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 5, mt: 15, width: "30ch" },
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
          
        >
          <div>
            <TextField
              id="standard-number"
              label="ID Subject"
              name="id_sub"
              variant="standard"
              onChange={moomoo}
              
            />
            
          </div>
          <Box sx={{ "& button": { m: 1 } }}>
            <div>
              <Button size="large" variant="contained" color="success" type="submit" onClick={mamaa}> 
                Check
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}

