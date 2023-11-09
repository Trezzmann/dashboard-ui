import { BiSolidReport } from "react-icons/bi";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaHandshake, FaStore, FaUserCog, FaUserTie } from "react-icons/fa";
import { RiDashboard2Fill } from "react-icons/ri";

export const menuData = [
  {
    id: 1,
    pathName: "Dashboard",
    icon: <RiDashboard2Fill />,
    url: "/",
    implemented: true,
  },
  {
    id: 2,
    pathName: "Agents",
    icon: <FaUserTie />,
    url: "/",
    implemented: false,
  },
  {
    id: 3,
    pathName: "Providers",
    icon: <FaHandshake />,
    url: "/",
    implemented: false,
  },
  {
    id: 4,
    pathName: "Stocks",
    icon: <FaStore />,
    url: "/",
    implemented: false,
  },
  {
    id: 5,
    pathName: "Reports",
    icon: <BiSolidReport />,
    url: "/",
    implemented: false,
  },
  {
    id: 6,
    pathName: "Transactions",
    icon: <BsBarChartLineFill />,
    url: "/",
    implemented: false,
  },
  {
    id: 7,
    pathName: "Admins",
    icon: <FaUserCog />,
    url: "/admins",
    implemented: true,
  },
];
