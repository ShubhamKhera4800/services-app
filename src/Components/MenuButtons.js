import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

function getButtonColor(placement) {
  if (placement === "main") return "white";
}
function HomeButton({ placement }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (redirect) => {
    console.log(redirect);
    if (redirect) {
      const redirectionString = `/${redirect}`;
      console.log(redirectionString);
      navigate(redirectionString);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="home-button"
        aria-controls={open ? "home-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // onMouseEnter={handleClick}
        onClick={() => navigate("/")}
        sx={{ color: getButtonColor(placement) }}
      >
        Home
      </Button>
      <Menu
        id="home-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "home-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

function AboutButton({ placement }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (redirect) => {
    console.log(redirect);
    if (redirect) {
      const redirectionString = `/${redirect}`;
      console.log(redirectionString);
      navigate(redirectionString);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="about-button"
        aria-controls={open ? "about-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // onMouseEnter={handleClick}
        onClick={() => navigate("/about")}
        sx={{ color: getButtonColor(placement) }}
      >
        About Us
      </Button>
      <Menu
        id="about-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "about-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

function ServicesButton({ placement }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (redirect) => {
    if (redirect) navigate(`/${redirect}`);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="services-button"
        aria-controls={open ? "services-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={() => navigate("/services")}
        // onMouseEnter={handleClick}
        sx={{ color: getButtonColor(placement) }}
      >
        Services
      </Button>
      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "services-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

function ConatctUsButton({ placement }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (redirect) => {
    if (redirect) navigate(`/${redirect}`);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="contact-button"
        aria-controls={open ? "contact-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={() => navigate("/contact")}
        // onMouseEnter={handleClick}
        sx={{ color: getButtonColor(placement) }}
      >
        Contact Us
      </Button>
      <Menu
        id="contact-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "contact-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export { HomeButton, ServicesButton, ConatctUsButton, AboutButton };
