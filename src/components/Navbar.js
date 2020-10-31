import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import myself from "../images/sakib3.png";
import CreateIcon from "@material-ui/icons/Create";
import InfoIcon from "@material-ui/icons/Info";
import Footer from "../components/Footer";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	appbar: {
		background: "#222",
		margin: 0,
	},
	arrow: {
		color: "tomato",
		fontSize: 30,
		[theme.breakpoints.down("sm")]: {
			marginRight: "100px",
			fontSize: 60,
		},
	},
	title: {
		color: "tan",
		marginLeft: "20px",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
		cursor: "pointer",
	},
	menuSliderContainer: {
		width: 250,
		background: "#6D4C41",
		height: "100%",
		flexGrow: "1",
	},
	avatar: {
		display: "block",
		margin: "0.5rem auto",
		width: theme.spacing(13),
		height: theme.spacing(13),
	},
	listItem: {
		color: "tan",
	},
}));

const menuItems = [
	{ listIcon: <Home/>, listText: "Home", listPath: "/" },
	{ listIcon: <AssignmentInd/>, listText: "Resume", listPath: "/resume" },
	{ listIcon: <Apps/>, listText: "Portfolio", listPath: "/portfolio" },
	{ listIcon: <ContactMail/>, listText: "Contact", listPath: "/contact" },
	{ listIcon: <CreateIcon/>, listText: "Articles", listPath: "/blogs" },
	{ listIcon: <InfoIcon/>, listText: "About Myself", listPath: "/about" },
];

const Navbar = () => {
	const history = useHistory();
	const location = useLocation();

	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const sideList = () => (
		<Box className={classes.menuSliderContainer} component="div">
			<Avatar className={classes.avatar} src={myself} alt="Zubayer Ahmed" />
			<Divider />
			<List>
				{menuItems.map((item, i) => (
					<ListItem
						button
						key={i}
						className={classes.listItem}
						onClick={() => setOpen(false)}
						component={Link}
						to={item.listPath}
					>
						<ListItemIcon className={classes.listItem}>
							{item.listIcon}
						</ListItemIcon>
						<ListItemText primary={item.listText} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<React.Fragment>
			<Box component="nav">
				<AppBar position="fixed" className={classes.appbar}>
					<Toolbar>
						<Typography variant="body1" style={{ flexGrow: "1", color: "tan" }}>
							Portfolio of Zubayer Ahmed
						</Typography>

						{location.pathname === "/" ? (
							<Typography
								variant="h6"
								className={classes.title}
								onClick={() => history.push("/")}
								style={{ borderBottom: "2px solid tomato" }}
							>
								Home
							</Typography>
						) : (
							<Typography
								variant="h6"
								className={classes.title}
								onClick={() => history.push("/")}
							>
								Home
							</Typography>
						)}

            {location.pathname === "/resume" ? (
							<Typography
								variant="h6"
								className={classes.title}
								style={{ borderBottom: "2px solid tomato" }}
								onClick={() => history.push("/resume")}
							>
								Resume
							</Typography>
						) : (
							<Typography
								variant="h6"
								className={classes.title}
								onClick={() => history.push("/resume")}
							>
								Resume
							</Typography>
						)}
						{location.pathname === "/portfolio" ? (
							<Typography
								variant="h6"
								className={classes.title}
								style={{ borderBottom: "2px solid tomato" }}
								onClick={() => history.push("/portfolio")}
							>
								Projects
							</Typography>
						) : (
							<Typography
								variant="h6"
								className={classes.title}
								onClick={() => history.push("/portfolio")}
							>
								Projects
							</Typography>
						)}

            {location.pathname === "/about" ? (
							<Typography
								variant="h6"
								className={classes.title}
								style={{ borderBottom: "2px solid tomato" }}
								onClick={() => history.push("/about")}
							>
								About
							</Typography>
						) : (
							<Typography
								variant="h6"
								className={classes.title}
								onClick={() => history.push("/about")}
							>
								About
							</Typography>
						)}
						
            {location.pathname === "/contact" ? (
							<Typography
								variant="h6"
								className={classes.title}
								style={{ borderBottom: "2px solid tomato" }}
								onClick={() => history.push("/contact")}
							>
								Contact
							</Typography>
						) : (
							<Typography
								variant="h6"
								className={classes.title}
								onClick={() => history.push("/contact")}
							>
								Contact
							</Typography>
						)}
						
            {location.pathname === "/blogs" ? (
							<Typography
								variant="h6"
								className={classes.title}
								style={{ borderBottom: "2px solid tomato" }}
								onClick={() => history.push("/blogs")}
							>
								Articles
							</Typography>
						) : (
							<Typography
								variant="h6"
								className={classes.title}
								onClick={() => history.push("/blogs")}
							>
								Articles
							</Typography>
						)}

						<IconButton
							onClick={() => setOpen(true)}
							style={{ cursor: "pointer" }}
						>
							<MenuIcon className={classes.arrow} />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
			<Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
				{sideList()}
				<Footer />
			</Drawer>
		</React.Fragment>
	);
};

export default Navbar;
