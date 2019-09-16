import { MoveToInbox, Mail } from "@material-ui/icons";

const Screens = {
	firstScreens: [
		{
			text: "Pagina 1",
			icon: MoveToInbox,
			url: "/",
			name: "main"
		},
		{
			text: "Pagina 2",
			icon: Mail,
			url: "/Second",
			name: "second"
		}
	],
	secondaryScreens: [
		{
			text: "Pagina 3",
			icon: MoveToInbox
		},
		{
			text: "Pagina 4",
			icon: Mail
		}
	]
};

export default Screens;
