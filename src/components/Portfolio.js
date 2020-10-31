import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Projects from "./Projects";


const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
		height: "100%",
		marginTop:"50px"
	},
	cardContainer: {
		maxWidth: 345,
		margin: "3rem auto",
	},
}));

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Box component="div" className={classes.mainContainer}>
			<Grid container justify="center">
				<Projects/>
			</Grid>
		</Box>
	);
};

export default Portfolio;
