import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import myself from "../images/sakib3.png";
import { BottomNavigation, Button, Link } from "@material-ui/core";
import Projects from "./Projects";
import Footer from "./Footer";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
	links: {
		marginTop: "30px",
		color: "tan",
		fontSize: 40,
		padding: "5px",
	},

	contact: {
		marginTop: "1800px",
		 position:'absolute',
		 //top: "50%",
		left: "15%",
		width:'75vw',
		zIndex:'1',
		height:'100vh',
		[theme.breakpoints.down("sm")]: {
			marginTop: "4200px",
		},
	},

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
		[theme.breakpoints.down("sm")]: {
			top: "70%",
		},
	},
	gridContainer: {
		position: "absolute",
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box className={classes.typedContainer}>
				<Grid container justify="center">
					<Avatar className={classes.avatar} src={myself} alt="Zubayer Ahmed" />
				</Grid>
				<Typography className={classes.title} variant="h5">
					<Typed
						strings={[
							"Hello Recruiter,I am Zubayer.A passionate web developer.Let's work together",
						]}
						typeSpeed={30}
					/>
				</Typography>

				<Typography className={classes.subtitle} variant="h6">
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

				<Button
					variant="contained"
					color="primary"
					onClick={() =>
						(window.location =
							"https://drive.google.com/file/d/1VmTfUOm5u13o3RMmiaz1RmO5D34S20US/view?usp=sharing")
					}
					style={{ marginTop: "10px" }}
				>
					Download Resume
				</Button>
				<br />
				<Facebook className={classes.links} />
				<LinkedIn className={classes.links} />
				<GitHub className={classes.links} />
			</Box>

			<Box style={{ marginTop: "650px" }} className={classes.gridContainer}>
				<Typography variant="h4" align="center" style={{ color: "tomato" }}>
					Projects
				</Typography>
				<Grid container justify="center">
					<Projects />
				</Grid>
			</Box>
			<Box className={classes.contact}>
				<Contact />
			</Box>
		</React.Fragment>
	);
};

export default Header;
