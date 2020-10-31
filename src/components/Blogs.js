import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import blogPic from "../images/blog1.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: "#233",
		height: "100vh",
		overflowX: "hidden",
	},
	paper: {
		padding: theme.spacing(2),
		margin: "auto",
		maxWidth: 800,
		background: "#333333",
	},
	image: {
		width: 158,
		height: 128,
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
}));

export default function Blogs() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography
				variant="h4"
				align="center"
				style={{ color: "tomato", marginTop: "100px", marginBottom: "20px" }}
			>
				My Blogs
			</Typography>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img
								className={classes.img}
								alt="complex"
								src={blogPic}
								onClick={() =>
									(window.location =
										"https://zubi-ahmed.medium.com/demystifying-recursion-ed409fe81bf6")
								}
							/>
						</ButtonBase>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography
									variant="h6"
									gutterBottom
									style={{ color: "tan", marginTop: "20px" }}
								>
									An article where the working method of recursion is discussed
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
