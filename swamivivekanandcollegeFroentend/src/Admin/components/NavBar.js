/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, ButtonBase, ButtonGroup } from "@material-ui/core";
import React, { useContext } from "react";
import "./css/navbar.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router";
import { authContext } from "../hooks/useAuth";
const NavBar = ({ children }) => {
  let history = useHistory();
  const { setAuthData, auth } = useContext(authContext);
  const LogOut = () => {
    setAuthData("", () => {
      history.push("/admin");
    });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light">
        <a className="navbar-brand" href="#">
          Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <ButtonBase>
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </ButtonBase>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ButtonGroup
                  fullWidth
                  size="large"
                  orientation="vertical"
                  aria-label="vertical contained primary button group"
                  variant="text"
                  color="primary"
                >
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </div>
            </li>
          </ul>
          <Button onClick={LogOut} startIcon={<ExitToAppIcon />}>
            LogOut
          </Button>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default NavBar;
