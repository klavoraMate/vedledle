import Menu from "@mui/material/Menu";
import {MENU_STYLE} from "@/app/util/styleConstants";

interface AppBarNavigationMenuProps {
    children: React.ReactNode;
    anchorElNav: HTMLElement | null;
    handleCloseNavMenu: (setting: string | object) => void;
}

export default function AppBarNavigationMenu({children, anchorElNav, handleCloseNavMenu}: AppBarNavigationMenuProps){
    return(
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={menuStyle}
        >
            {children}
        </Menu>
    )
}

const menuStyle = {
    ...MENU_STYLE,
    display: {xs: 'block', md: 'none'},
}