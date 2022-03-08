import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
// import Social from "./social";
import { Link } from "@mui/material";
import "./drawer-content.scss";
import classnames from "classnames";
import HomeIcon from '../../../assets/icons/Home.svg';
import LaunchpadIcon from '../../../assets/icons/Launchpad.svg';
import LeaderboardIcon from '../../../assets/icons/Leaderboard.svg';
import StatsIcon from '../../../assets/icons/Stats.svg';
import WhitepaperIcon from '../../../assets/icons/Whitepaper.svg';
import RoadmapIcon from '../../../assets/icons/Roadmap.svg';
import FAQIcon from '../../../assets/icons/FAQ.svg';
import DiscordIcon from '../../../assets/icons/Discord.svg';
import TwitterIcon from '../../../assets/icons/Twitter.svg';
import SettingsIcon from '../../../assets/icons/Setting.svg';
import RepairToolIcon from '../../../assets/icons/RepairTool.svg';
import SignoutIcon from '../../../assets/icons/signout.svg';

function NavContent({mobileOpen, isSmallerScreen}) {
    const [isActive] = useState();

    const checkPage = useCallback((location, page) => {
        const currentPath = location.pathname.replace("/", "");
        if (currentPath.indexOf("home") >= 0 && page === "home") {
            return true;
        }
        if (currentPath.indexOf("launchpad") >= 0 && page === "launchpad") {
            return true;
        }
        if (currentPath.indexOf("leaderboard") >= 0 && page === "leaderboard") {
            return true;
        }        
        if (currentPath.indexOf("stats") >= 0 && page === "stats") {
            return true;
        }
        if (currentPath.indexOf("whitepaper") >= 0 && page === "whitepaper") {
            return true;
        }
        if (currentPath.indexOf("roadmap") >= 0 && page === "roadmap") {
            return true;
        }
        if (currentPath.indexOf("faq") >= 0 && page === "faq") {
            return true;
        }
        if (currentPath.indexOf("discord") >= 0 && page === "discord") {
            return true;
        }
        if (currentPath.indexOf("twitter") >= 0 && page === "twitter") {
            return true;
        }
        if (currentPath.indexOf("settings") >= 0 && page === "settings") {
            return true;
        }
        if (currentPath.indexOf("support") >= 0 && page === "support") {
            return true;
        }        
        return false;
    }, []);

    return (
        <div className="dapp-sidebar" style={{minWidth: mobileOpen ? 240 : 60, paddingTop: isSmallerScreen ? 20 : 100}}>
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
                        to="/launchpad"
                        isActive={(match, location) => {
                            return checkPage(location, "launchpad");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={LaunchpadIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Launchpad</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/leaderboard"
                        isActive={(match, location) => {
                            return checkPage(location, "leaderboard");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={LeaderboardIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Leaderboard</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/stats"
                        isActive={(match, location) => {
                            return checkPage(location, "stats");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={StatsIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Stats</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/whitepaper"
                        isActive={(match, location) => {
                            return checkPage(location, "whitepaper");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={WhitepaperIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Whitepaper</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/roadmap"
                        isActive={(match, location) => {
                            return checkPage(location, "roadmap");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={RoadmapIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Roadmap</p>}
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/faq"
                        isActive={(match, location) => {
                            return checkPage(location, "faq");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={FAQIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>FAQ</p>}
                        </div>
                    </Link>
                    <Link
                        component={NavLink}
                        to="/discord"
                        isActive={(match, location) => {
                            return checkPage(location, "discord");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={DiscordIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Discord</p>}
                        </div>
                    </Link>
                    <Link
                        component={NavLink}
                        to="/twitter"
                        isActive={(match, location) => {
                            return checkPage(location, "twitter");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={TwitterIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Twitter</p>}
                        </div>
                    </Link>
                    <Link
                        component={NavLink}
                        to="/settings"
                        isActive={(match, location) => {
                            return checkPage(location, "settings");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={SettingsIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Settings</p>}
                        </div>
                    </Link>
                    <Link
                        component={NavLink}
                        to="/support"
                        isActive={(match, location) => {
                            return checkPage(location, "support");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={RepairToolIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Support</p>}
                        </div>
                    </Link>
                    <Link
                        component={NavLink}
                        to="/"
                        isActive={(match, location) => {
                            return checkPage(location, "");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={SignoutIcon} style={{marginRight: mobileOpen ? 10 : 0}}  />
                            {mobileOpen && <p>Logout</p>}
                        </div>
                    </Link>                 

                </div>
            </div>
            {/* <Social mobileOpen={mobileOpen} /> */}
        </div>
    );
}

export default NavContent;
