import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	MenuItem,
	ListItemText,
	ListItemIcon,
	Badge
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {
	AccountCircle,
	PowerSettingsNew,
	Notifications
} from "@material-ui/icons";

import clsx from "clsx";

const styles = {
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: 20
	},
	title: {
		flexGrow: 1,
		color: "white"
	}
};

class CustomAppBar extends Component {
	state = {
		anchorEl: null
	};
	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};
	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;

		const open2 = Boolean(this.state.anchorEl);
		return (
			<AppBar
				position="fixed"
				className={clsx(this.props.classesDrawer.appBar, {
					[this.props.classesDrawer.appBarShift]: this.props.open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={this.props.handleDrawerOpen}
						edge="start"
						className={clsx(this.props.classesDrawer.menuButton, {
							[this.props.classesDrawer.hide]: this.props.open
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap className={classes.title}>
						{this.props.title}
					</Typography>

					<div>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={this.handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={this.state.anchorEl}
							getContentAnchorEl={null}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "center"
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "center"
							}}
							keepMounted
							open={open2}
							onClose={this.handleClose}
						>
							<MenuItem>
								<ListItemIcon>
									<Badge
										badgeContent={3}
										max={100}
										color="error"
									>
										<Notifications />
									</Badge>
								</ListItemIcon>
								<ListItemText primary="Notificações" />
							</MenuItem>
							<MenuItem selected>
								<ListItemIcon>
									<AccountCircle />
								</ListItemIcon>
								<ListItemText primary="Meu perfil" />
							</MenuItem>
							<MenuItem>
								<ListItemIcon>
									<PowerSettingsNew />
								</ListItemIcon>
								<ListItemText primary="Sair" />
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles)(CustomAppBar);
