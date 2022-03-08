import { AppBar, Toolbar, Link, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from '../../assets/images/PixelandLogo.png';
import LeftIndentIcon from "../../assets/icons/leftindent.svg";
import RightIndentIcon from "../../assets/icons/rightindent.svg";
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
                        {mobileOpen && <img src={LeftIndentIcon} width={30} height={30} alt="" /> }
                        {!mobileOpen && <img src={RightIndentIcon} width={30} height={30} alt="" /> }
                    </IconButton>
                    <div className="branding-logo">
                        <Link href="/">
                            <img className="branding-logo-image" alt="" width="36" src={Logo} />
                        </Link>
                    </div>                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
