import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import {
	Drawer,
	List,
	Divider,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import CustomAppBar from "../CustomAppBar";
import Screens from "../../pages/DrawerPagesReference";

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36
	},
	hide: {
		display: "none"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap"
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: "hidden",
		width: theme.spacing.unit * 7 + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing.unit * 9 + 1
		}
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3
	}
});

class CustomDrawerContainer extends Component {
	componentDidMount() {}

	state = {
		open: false
	};
	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	render() {
		const { classes, theme } = this.props;
		return (
			<div className={classes.root}>
				<CustomAppBar
					classesDrawer={classes}
					title={this.props.title}
					open={this.state.open}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					variant="permanent"
					className={clsx(classes.drawer, {
						[classes.drawerOpen]: this.state.open,
						[classes.drawerClose]: !this.state.open
					})}
					classes={{
						paper: clsx({
							[classes.drawerOpen]: this.state.open,
							[classes.drawerClose]: !this.state.open
						})
					}}
					open={this.state.open}
				>
					<div className={classes.toolbar}>
						<IconButton onClick={this.handleDrawerClose}>
							{theme.direction === "rtl" ? (
								<ChevronRight />
							) : (
								<ChevronLeft />
							)}
						</IconButton>
					</div>
					<Divider />
					<List>
						{Screens.firstScreens.map((screen, i) => (
							<ListItem
								selected={this.props.selected === screen.name}
								onClick={() =>
									this.props.history.push(screen.url)
								}
								button
								key={i}
							>
								<ListItemIcon>
									<screen.icon />
								</ListItemIcon>
								<ListItemText primary={screen.text} />
							</ListItem>
						))}
					</List>

					<Divider />
					<List>
						{Screens.secondaryScreens.map((screen, i) => (
							<ListItem button key={i}>
								<ListItemIcon>
									<screen.icon />
								</ListItemIcon>
								<ListItemText primary={screen.text} />
							</ListItem>
						))}
					</List>
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(CustomDrawerContainer);
