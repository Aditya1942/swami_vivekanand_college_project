import React, {  useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory, useLocation } from "react-router";
import {  useAuth } from "../hooks/useAuth";
import axios from "axios";
import useAlertMsg from "../hooks/useAlertMsg";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/admin" } };
  let auth = useAuth();
  let AlertMsg = useAlertMsg();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  useEffect(() => {
    console.log(auth);
    let token = JSON.parse(localStorage.getItem("token"));
    if (token && token !== "") {
      history.replace(from);
      console.log("LOGIN");
    }
  }, [auth, from, history]);
  let login = () => {
    console.log(Username, Password);
    console.log(AlertMsg);

    axios
      .post("/auth/login", {
        username: Username,
        password: Password,
      })
      .then((res) => {
        if (res?.data?.success) {
          auth.setAuthData(res.data.token, () => {
            console.log(auth);
            AlertMsg.success("Login Successfully");
            history.replace(from);
          });
        } else if (res.status === 404) {
          AlertMsg.error("User Not Found");
        } else if (res.status === 400) {
          AlertMsg.error("Invalid Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              value={Username}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Username"
              label="Username"
              name="Username"
              autoComplete="Username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              value={Password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={login}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={8}>
          <Copyright />
        </Box> */}
      </Container>
    </>
  );
}
