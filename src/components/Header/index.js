import { AppBar, Toolbar, Link, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from '../../assets/images/logo.png';
import Drawer1Icon from "../../assets/icons/drawer1.svg";
import Drawer2Icon from "../../assets/icons/drawer2.svg";
import "./header.scss";

const useStyles = makeStyles({
    appBar: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        background: "#222222!important",
        backdropFilter: "none",
        zIndex: '1300!important',
    }
});


function Header({ handleDrawerToggle, mobileOpen }) {
    const classes = useStyles();    
    
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} elevation={0}>
                <Toolbar disableGutters className="dapp-topbar">
                    <IconButton variant="text" onClick={handleDrawerToggle}>
                        {mobileOpen && <img src={Drawer1Icon} width={30} height={30} alt="" /> }
                        {!mobileOpen && <img src={Drawer2Icon} width={30} height={30} alt="" /> }
                    </IconButton>
                    <div className="branding-logo">
                        <Link href="/">
                            <img className="branding-logo-image" alt="" width="50" src={Logo} />
                        </Link>
                    </div>                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
