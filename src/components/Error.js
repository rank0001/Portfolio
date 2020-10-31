import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
	container: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1,
	},
}));

export default function Error() {
	const classes = useStyles();

	return (
		<div>
			<React.Fragment className={classes.container}>
				<Typography
					align="center"
					variant="h4"
					style={{ marginTop: "100px", color: "tomato" }}
				>
					Sorry you have come to the wrong url
					<Particles />
				</Typography>
			</React.Fragment>
		</div>
	);
}
