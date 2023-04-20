import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import {
    IoIosPeople, IoIosCash, IoIosPaper,
    IoMdPeople, IoMdHelpCircle
} from 'react-icons/io';
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';

export const SidebarData = [
    {
        title: "Overview",
        path: "/overview",
        icon: <AiFillHome />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subMenu: [
            {
                title: "Users",
                path: "/overview/users",
                icon: <IoIosPeople />
            },
            {
                title: "Revenue",
                path: "/overview/revenue",
                icon: <IoIosCash />
            }
        ]
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <IoIosPaper />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subMenu: [
            {
                title: "Reports",
                path: "/reports/reports1",
                icon: <IoIosPaper />
            },
            {
                title: "Reports 2",
                path: "/reports/reports2",
                icon: <IoIosPaper />
            },
            {
                title: "Reports 3",
                path: "/reports/reports3",
                icon: <IoIosPaper />
            }
        ]
    },
    {
        title: "Products",
        path: "/products",
        icon: <FaCartPlus />
    },
    {
        title: "Team",
        path: "/team",
        icon: <IoMdPeople />
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <FaEnvelopeOpenText />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subMenu: [
            {
                title: "Messages 1",
                path: "/messages/messages1",
                icon: <AiFillMessage />
            },
            {
                title: "Messages 2",
                path: "/messages/messages2",
                icon: <AiFillMessage />
            }
        ]
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoMdHelpCircle />
    }
]