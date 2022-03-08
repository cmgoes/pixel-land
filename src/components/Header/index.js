import { AppBar, Toolbar, Link, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from '../../assets/images/PixelandLogo.png';
import LeftIndentIcon from "../../assets/icons/leftindent.svg";
import RightIndentIcon from "../../assets/icons/rightindent.svg";
import NotificationIcon from '../../assets/icons/Notifications.svg';
import WalletIcon from "../../assets/icons/Wallet.svg";
import ProfileIcon from "../../assets/icons/profile.svg";

import "./header.scss";
// import { flexbox } from "@mui/system";

const useStyles = makeStyles({
    appBar: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        background: "#222222!important",
        backdropFilter: "none",
        zIndex: '1300!important',
    },
    brandinglogo: {
        marginLeft: "10px",
        display: "flex",
        flexGrow: "1",
        justifyContent: "space-between",
    },
    Iconpanel: {
        display: "flex",
        justifyContent: "space-between",
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
                    <div className={classes.brandinglogo}>
                        <Link href="/">
                            <img className="branding-logo-image" alt="" width="36" src={Logo} />
                        </Link>
                        <div className={classes.Iconpanel}>
                            <IconButton variant="text">
                                <img src={NotificationIcon} width={30} height={30} alt="" />                        
                            </IconButton>
                            <IconButton variant="text">
                                <img src={WalletIcon} width={30} height={30} alt="" />                        
                            </IconButton>
                            <IconButton variant="text">
                                <img src={ProfileIcon} width={40} height={40} alt="" />                        
                            </IconButton>
                        </div>
                    </div>                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
