import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.kmutnb.ac.th/getattachment/news/university-news/%E0%B8%AA%E0%B8%A1%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%93%E0%B8%99%E0%B8%AD%E0%B8%87-%E0%B9%86-%E0%B9%80%E0%B8%9F%E0%B8%A3%E0%B8%8A%E0%B8%8A%E0%B8%9B-1-%E0%B8%A5%E0%B8%81%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%A1%E2%80%9D-%E0%B8%9D%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%95%E0%B8%B0%E0%B8%A7/TON_3959.jpg.aspx)',
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Signin() {
  const classes = useStyles();
  const [userData , setUser] = useState({id_user:'',password:''});
  const {id_user  , password} = userData;
  const handleChange = e => {
    console.log(e);
      const {name , value} = e.target;
      setUser({...userData , [name]:value});
  }

  const location = useLocation();
  if(location.pathname === "/logout"){
    localStorage.clear();
  }

  const handleSubmit = e =>{
    e.preventDefault();
    axios.post(`http://192.168.1.2:9999/api/users/login/${id_user}/${password}`)
    .then((res)=>{ 
      if(res.data){
        localStorage.setItem('user' , JSON.stringify(res.data))

        swal('Success' , "Login successfully" , "success").then(()=>{
          window.location.href = process.env.PUBLIC_URL + '/profile';
        })
      }
    })
    .then(res => {
      console.log(res.data);
    })
  }
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} md={7} className={classes.image} />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="id_user"
              label="ID"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="ICIT Password"
              onChange={handleChange}

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
