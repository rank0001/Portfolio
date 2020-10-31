import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import project1 from "../images/pro1.png";
import project2 from "../images/pro2.png";
import project3 from "../images/pro3.png";
import project4 from "../images/pro4.png";
import project5 from "../images/pro5.png";
import project6 from "../images/pro6.png";

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		maxWidth: 345,
		margin: "3rem auto",
		//height:600
	},
}));

export default function Projects() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid item xs={12} sm={8} md={6} lg={4}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia
							style={{ height: "200px" }}
							component="img"
							alt="Project 1"
							height="140"
							image={project1}
						/>
						<CardContent>
							<Typography variant="h6" gutterBottom>
								Built a full stack mern app where admin and user roles are
								segregated.Admin can update invoices or add services and user
								can register for services and add feedbacks.
							</Typography>
							<Typography variant="body2" color="textSecondary">
								Reactjs, Mongodb, Redux, Firebase, ExpressJS, Javascript,
								NodeJS, Bootstrap, react-slider, Material-UI, Heroku
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<a
							rel="noopener noreferrer"
							href="https://github.com/rank0001/Creative-Agency-Client"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Code
							</Button>
						</a>

						<a
							rel="noopener noreferrer"
							href="https://creative-agency-80a71.web.app/"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Demo
							</Button>
						</a>
					</CardActions>
				</Card>
			</Grid>

			<Grid item xs={12} sm={8} md={6} lg={4}>
				<Card className={classes.cardContainer} style={{ height: "530px" }}>
					<CardActionArea>
						<CardMedia
							style={{ height: "200px" }}
							component="img"
							alt="Project 2"
							height="140"
							image={project2}
						/>
						<CardContent>
							<Typography variant="h6" gutterBottom>
								Developed a full stack mern app where different volunteering
								events are added by admins and users can register to any of
								those events according to their choices.
							</Typography>
							<Typography variant="body2" color="textSecondary">
								Reactjs,Mongodb, Redux, Firebase, ExpressJS, Javascript, NodeJS,
								React-Bootstrap, Material-UI, Heroku
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions style={{ marginTop: "20px" }}>
						<a
							rel="noopener noreferrer"
							href="https://github.com/rank0001/Voluntary-Network-ClientSide"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Code
							</Button>
						</a>

						<a
							rel="noopener noreferrer"
							href="https://voluntary-network.web.app/"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Demo
							</Button>
						</a>
					</CardActions>
				</Card>
			</Grid>

			<Grid item xs={12} sm={8} md={6} lg={4}>
				<Card className={classes.cardContainer} style={{ height: "530px" }}>
					<CardActionArea>
						<CardMedia
							style={{ height: "200px" }}
							component="img"
							alt="Project 3"
							height="140"
							image={project3}
						/>
						<CardContent>
							<Typography variant="h6" gutterBottom>
								Created a travel based app where user can choose their favourite
								destination for booking purposes and look for its location in
								the google map.
							</Typography>
							<Typography variant="body2" color="textSecondary">
								Reactjs, Redux, Firebase, Javascript, NodeJS, React-Bootstrap,
								Material-UI, Google Map Api
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions style={{ marginTop: "30px" }}>
						<a
							rel="noopener noreferrer"
							href="https://github.com/rank0001/Tour-guide"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Code
							</Button>
						</a>

						<a
							rel="noopener noreferrer"
							href="https://travel-guide-2fc02.web.app/"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Demo
							</Button>
						</a>
					</CardActions>
				</Card>
			</Grid>

			<Grid item xs={12} sm={8} md={6} lg={4}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia
							style={{ height: "200px" }}
							component="img"
							alt="Project 4"
							height="140"
							image={project4}
						/>
						<CardContent>
							<Typography variant="h6" gutterBottom>
								Created a react app where post api was fetched from
								jsonplaceholder website and displayed different routes based on
								clicking of different posts.
							</Typography>
							<Typography variant="body2" color="textSecondary">
								Reactjs,Redux,Javascript, NodeJS,Material-UI,netlify
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<a
							rel="noopener noreferrer"
							href="https://github.com/rank0001/React-Routes"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Code
							</Button>
						</a>

						<a
							rel="noopener noreferrer"
							href="https://postroutes.netlify.app/"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Demo
							</Button>
						</a>
					</CardActions>
				</Card>
			</Grid>

			<Grid item xs={12} sm={8} md={6} lg={4}>
				<Card className={classes.cardContainer} style={{ height: "480px" }}>
					<CardActionArea>
						<CardMedia
							style={{ height: "200px" }}
							component="img"
							alt="Project 5"
							height="140"
							image={project5}
						/>
						<CardContent>
							<Typography variant="h6" gutterBottom>
								Built a react SPA app where various courses are displayed in the
								page and clicking on each one the total count increases
							</Typography>
							<Typography variant="body2" color="textSecondary">
								Reactjs,contextApi,Javascript, NodeJS,Material-UI
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions style={{ marginTop: "20px" }}>
						<a
							rel="noopener noreferrer"
							href="https://github.com/rank0001/React-Spa-Assignment"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Code
							</Button>
						</a>

						<a
							rel="noopener noreferrer"
							href="https://pedantic-neumann-e61a3b.netlify.app/#features"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Demo
							</Button>
						</a>
					</CardActions>
				</Card>
			</Grid>

			<Grid item xs={12} sm={8} md={6} lg={4}>
				<Card className={classes.cardContainer} style={{ height: "480px" }}>
					<CardActionArea>
						<CardMedia
							style={{ height: "200px" }}
							component="img"
							alt="Project 6"
							height="140"
							image={project6}
						/>
						<CardContent>
							<Typography variant="h6" gutterBottom>
								Created a javascript app where songs are fetched from an api
								depending upon different search from users and displayed
								subsequently on the page
							</Typography>
							<Typography variant="body2" color="textSecondary">
								Javascript,html,css,bootstrap
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions style={{ marginTop: "12px" }}>
						<a
							rel="noopener noreferrer"
							href="https://github.com/rank0001/api-assignment"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Code
							</Button>
						</a>

						<a
							rel="noopener noreferrer"
							href="https://rank0001.github.io/api-assignment/"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<Button size="small" color="primary">
								Demo
							</Button>
						</a>
					</CardActions>
				</Card>
			</Grid>
		</React.Fragment>
	);
}
