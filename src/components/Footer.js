import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} onClick={()=>window.location='https://www.facebook.com/zsakib1'}/>
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} onClick={()=>window.location='https://www.linkedin.com/in/zubayerahmed'} />
      <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} 
      onClick={()=>window.location='https://github.com/rank0001'} />
    </BottomNavigation>
  );
};
export default Footer;
