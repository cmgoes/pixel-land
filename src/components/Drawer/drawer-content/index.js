import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "./social";
import { Link } from "@mui/material";
import "./drawer-content.scss";
import classnames from "classnames";
import HomeIcon from '../../../assets/icons/home.svg';
import FarmIcon from '../../../assets/icons/farm.svg';
import PoolsIcon from '../../../assets/icons/pools.svg';
import ReferralsIcon from '../../../assets/icons/referrals.svg';


function NavContent({mobileOpen, isSmallerScreen}) {
    const [isActive] = useState();

    const checkPage = useCallback((location, page) => {
        const currentPath = location.pathname.replace("/", "");
        if (currentPath.indexOf("home") >= 0 && page === "home") {
            return true;
        }
        if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
            return true;
        }
        if (currentPath.indexOf("farms") >= 0 && page === "farms") {
            return true;
        }
        if (currentPath.indexOf("pools") >= 0 && page === "pools") {
            return true;
        }
        if (currentPath.indexOf("referrals") >= 0 && page === "referrals") {
            return true;
        }
        if (currentPath.indexOf("stake") >= 0 && page === "stake") {
            return true;
        }
        if (currentPath.indexOf("launchpad") >= 0 && page === "launchpad") {
            return true;
        }
        return false;
    }, []);

    return (
        <div className="dapp-sidebar" style={{minWidth: mobileOpen ? 240 : 50, paddingTop: isSmallerScreen ? 20 : 100}}>
            <div className="dapp-menu-links">
                <div className="dapp-nav">
                    <Link
                        component={NavLink}
                        to="/home"
                        isActive={(match, location) => {
                            return checkPage(location, "home");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={HomeIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Home</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/dashboard"
                        isActive={(match, location) => {
                            return checkPage(location, "dashboard");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={HomeIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Dashboard</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/farms"
                        isActive={(match, location) => {
                            return checkPage(location, "farms");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={FarmIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Farms</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/pools"
                        isActive={(match, location) => {
                            return checkPage(location, "pools");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={PoolsIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Pools</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/referrals"
                        isActive={(match, location) => {
                            return checkPage(location, "referrals");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={ReferralsIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Referrals</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/stake"
                        isActive={(match, location) => {
                            return checkPage(location, "stake");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={FarmIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Stake</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/launchpad"
                        isActive={(match, location) => {
                            return checkPage(location, "launchpad");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={FarmIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Launchpad

</p>}
                        </div>
                    </Link>
                </div>
            </div>
            <Social mobileOpen={mobileOpen} />
        </div>
    );
}

export default NavContent;
