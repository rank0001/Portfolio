import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "",
	},
	timeLine: {
		position: "relative",
		padding: "1rem",
		margin: "o auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "100%",
			border: "1px solid tan",
			right: "40px",
			top: 0,
		},
		"&:after": {
			content: "''",
			display: "table",
			clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},
	timeLineItem: {
		padding: "1rem",
		borderBottom: "2px solid tan",
		position: "relative",
		margin: "1rem 3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.625rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "tomato tomato transparent transparent",
			borderWidth: "0.625rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent tomato tomato",
			},
		},
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		color: "#fff",
		background: "tomato",
		lineHeight: 1,
		padding: "0.5rem 1rem",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	heading: {
		color: "tomato",
		padding: "3rem 0",
		textTransform: "uppercase",
	},
	subHeading: {
		color: "#fff",
		padding: 0,
		textTransform: "uppercase",
	},
	body1: {
		color: "tomato",
	},
	subtitle1: {
		color: "tan",
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<Box component="header" className={classes.mainContainer}>
			<Typography
				variant="h4"
				align="center"
				className={classes.heading}
			></Typography>
			<Box component="div" className={classes.timeLine}>
				<Box component="div" className={classes.timeLineItem}>
					<Typography
						variant="h5"
						align="center"
						className={classes.subHeading}
					>
						Summary
					</Typography>

					<Typography
						variant="subtitle1"
						align="center"
						className={classes.subtitle1}
					>
						Energetic and detail-oriented Web Developer with a knack for
						conceptualizing and delivering elegant, user-friendly solutions
						effectively and efficiently. Armed with a deep sense of
						responsibility with working knowledge of both client and server side
						technologies and filled with enthusiasm determined to give 120% for
						any endeavour.
					</Typography>
				</Box>

				<Box component="div" className={classes.timeLineItem}>
					<Typography
						variant="h5"
						align="center"
						className={classes.subHeading}
					>
						Technical Skills
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						className={classes.subtitle1}
					>
						Web Technology :
						Javascript,Reactjs,Bootstrap,Material-UI,Express,Mongoose/Mongodb,html5,css3{" "}
						<br />
						Tools: Vscode,Webstorm,Git,Chrome Dev Tool
						<br />
						Basic Idea : Typescript,Python <br /> Forgotten
						Knowledge:Java,Android,Jquery
						<br />
						Interested in : Machine Learning,Tensorflowjs
					</Typography>
				</Box>

				<Box component="div" className={classes.timeLineItem}>
					<Typography
						variant="h5"
						align="center"
						className={classes.subHeading}
					>
						Academic Qualification
					</Typography>
				
					<Typography
						variant="subtitle1"
						align="center"
						className={classes.subtitle1}
					>
          Currently studying as an Information & Communication Engineer(3rd year) in Pabna University Of Sciency & Technology holding a CGPA of 3.36 out of 4.00.
					</Typography>
				</Box>
				<Box component="div" className={classes.timeLineItem}>
					<Typography
						variant="h5"
						align="center"
						className={classes.subHeading}
					>
						Interests and Hobbies
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						className={classes.subtitle1}
					> 
          Interests:traveling,leadership programs,vlogging,gathering with childhood friends to reminisce old stuffs
          <br/>
          Hobbies:reading novels,playing guitar,watching great films 
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Resume;
