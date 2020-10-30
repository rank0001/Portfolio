import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import myself from "../images/sakib3.png";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(25),
		height: theme.spacing(25),
		margin: theme.spacing(1),
	},
	title: {
		color: "tomato",
	},
	subtitle: {
		color: "tan",
		textTransform: "uppercase",
	},
	typedContainer: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<Box className={classes.typedContainer}>
			<Grid container justify="center">
				<Avatar className={classes.avatar} src={myself} alt="Zubayer Ahmed" />
			</Grid>
			<Typography className={classes.title} variant="h4">
				<Typed
					strings={[
						"Hello Recruiter,I am Zubayer.A passionate web developer.Let's Work together"
					]}
					typeSpeed={30}
				/>
			</Typography>

			<Typography className={classes.subtitle} variant="h5">
				<Typed
					strings={[
						"Junior Web Developer",
						"Javascript Lover",
						"Machine Learning Enthusiast",
					]}
					typeSpeed={50}
					backSpeed={50}
					loop
				/>
			</Typography>
			
			<Button variant="contained" color="primary" onClick={()=>window.location="https://drive.google.com/file/d/1VmTfUOm5u13o3RMmiaz1RmO5D34S20US/view?usp=sharing"} style={{marginTop:'10px'}}>
				Download my Resume
			</Button>
		</Box>
	);
};

export default Header;
