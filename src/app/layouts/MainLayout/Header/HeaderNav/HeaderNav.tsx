import React from "react";
import { useSelector } from "react-redux";
import style9 from "style9";
import HeaderNavItem from "./HeaderNavItem";

// components
import { HomeIcon } from "@/app/components/Icons";
import { HomeFillIcon } from "@/app/components/Icons";
import { ExploreIcon } from "@/app/components/Icons";
import { ExploreFillIcon } from "@/app/components/Icons";
import { GroupIcon } from "@/app/components/Icons";
import { GroupFillIcon } from "@/app/components/Icons";
import { JobIcon } from "@/app/components/Icons";
import { BookmarkIcon } from "@/app/components/Icons";
import { BookmarkFillIcon } from "@/app/components/Icons";
import { UserIcon } from "@/app/components/Icons";
import { UserFillIcon } from "@/app/components/Icons";
import { SettingIcon } from "@/app/components/Icons";
import { SignOutIcon } from "@/app/components/Icons";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

// types
import { VIUState } from "@/app/types/viu.type";

const navList = [
  {
    id: 1,
    name: "Trang chủ",
    path: "home",
    icon: <HomeIcon />,
    iconFill: <HomeFillIcon />,
  },
  {
    id: 2,
    name: "Khám phá",
    path: "explore",
    icon: <ExploreIcon />,
    iconFill: <ExploreFillIcon />,
  },
  {
    id: 3,
    name: "Nhóm",
    path: "groups",
    icon: <GroupIcon />,
    iconFill: <GroupFillIcon />,
  },
  {
    id: 4,
    name: "Việc làm",
    path: "jobs",
    icon: <JobIcon />,
    iconFill: <JobIcon />,
  },
  {
    id: 5,
    name: "Đã lưu",
    path: "bookmarks",
    icon: <BookmarkIcon />,
    iconFill: <BookmarkFillIcon />,
  },
  {
    id: 6,
    name: "Hồ sơ",
    path: "profile",
    icon: <UserIcon />,
    iconFill: <UserFillIcon />,
  },
  {
    id: 7,
    name: "Cài đặt",
    path: "settings",
    icon: <SettingIcon />,
    iconFill: <SettingIcon />,
  },
  {
    id: 8,
    name: "Đăng xuất",
    path: "signout",
    icon: <SignOutIcon />,
    iconFill: <SignOutIcon />,
  },
];

const HeaderNav: React.FC = () => {
  const { profile } = useSelector(userSelector);

  return (
    <div className={style9(base.root, classes.navContainer)}>
      <nav className={style9(base.root, classes.nav)}>
        {navList.map(navItem => (
          <HeaderNavItem
            key={navItem.id}
            name={navItem.name}
            path={
              navItem.name === "Profile"
                ? profile?.student_id || ""
                : navItem.path
            }
            icon={navItem.icon}
            iconFill={navItem.iconFill}
          />
        ))}
      </nav>
    </div>
  );
};

const userSelector = (state: VIUState) => state.user;

export default HeaderNav;
