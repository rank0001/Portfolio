import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import myself from "../images/sakib2.png";

const useStyles = makeStyles((theme) => ({
	container: {
		background: "#233",
		height: "100vh",
		overflowX: "hidden",
	},
	grid: {
		padding: theme.spacing(10),
		marginTop: "100px",
	},
	image: {
		[theme.breakpoints.down("xs")]: {
			marginLeft: "-200px",
		},
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<Box component="div" className={classes.container}>
			<Grid container spacing={6}>
				<Grid className={classes.grid} item xs sm md lg={5}>
					<img src={myself} alt="Zubayer Ahmed" className={classes.image} />
				</Grid>
				<Grid className={classes.grid} item xs sm md lg={6}>
					<Typography
						variant="h5"
						style={{ color: "tomato", marginTop: "40px", marginBottom: "40px" }}
					>
						Hi,I am Zubayer.A web developer living in Dhaka,Bangladesh.I spend
						my days through coding,thinking,learning new stuffs and by drinking
						a lot of coffee.I work for building perfection.So let's work and
						create perfection together!
					</Typography>

					<Typography variant="h6" style={{ color: "tan" }}>
						As a web developer having mern as stack I am looking for an
						internship as well as an entry level job to gain real life work
						experience. Coding is something that always fascinates me and if I
						work for someone then it is benefiting for both because I always
						give more than my 100% out of commitment and dedication.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;
