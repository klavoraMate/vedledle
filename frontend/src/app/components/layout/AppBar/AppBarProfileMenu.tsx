import {MENU_STYLE, SECONDARY, TEXT_LIGHT} from "@/app/util/styleConstants";
import Menu from "@mui/material/Menu";

interface AppBarProfileMenuProps {
    children: React.ReactNode;
    anchorElUser: HTMLElement | null;
    handleCloseUserMenu: (setting: string | object) => void;
}

export default function AppBarProfileMenu({children, anchorElUser, handleCloseUserMenu}: AppBarProfileMenuProps) {
    return (
        <Menu
            sx={menuStyle}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >{children}
        </Menu>
    )
}


const menuStyle = {
    ...MENU_STYLE,
    mt: '45px',
}