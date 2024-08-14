import { createContext } from "react";

export interface Menu {
	toggled: boolean;
	setToggled: () => void;
}

const MenuContext = createContext<Menu>({
	toggled: false,
	setToggled: () => {},
});

export default MenuContext;
