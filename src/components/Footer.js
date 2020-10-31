import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
   
  },
  root: {
     padding:'15px',
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
      <a rel="noopener noreferrer"  className={classes.root} target='_blank'  href='https://www.facebook.com/zsakib1'><Facebook/> </a>
       <a rel="noopener noreferrer"  className={classes.root} target='_blank'  href='https://www.linkedin.com/in/zubayerahmed'><LinkedInIcon/> </a>
        <a rel="noopener noreferrer"  className={classes.root} target='_blank'  href='https://github.com/rank0001'><GitHubIcon/> </a>
    </BottomNavigation>
  );
};
export default Footer;
