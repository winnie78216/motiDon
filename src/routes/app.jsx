import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import MeetingNotes from "views/MeetingNotes/MeetingNotes.jsx";
import Typography from "views/Typography/Typography.jsx";
import Campaigns from "views/Campaigns/Campaigns.jsx";
import DonationMap from "views/DonationMap/DonationMap.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  GroupWork,
  Map,
  LocationOn,
  Notifications
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Dashboard,
    component: DashboardPage
  },
/*   {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  }, */
  {
    path: "/fundir",
    sidebarName: "Fundir",
    navbarName: "Fundir",
    icon: ContentPaste,
    component: MeetingNotes
  },
  {
    path: "/campaigns",
    sidebarName: "Campaigns",
    navbarName: "Campaigns",
    icon: GroupWork,
    component: Campaigns,
  },
  {
    path: "/donationmap",
    sidebarName: "Donation Map",
    navbarName: "Donation Map",
    icon: Map,
    component: DonationMap,
  },
  {
    path: "/login",
    sidebarName: "Log out",
    navbarName: "Log out",
    icon: null,
    component: MeetingNotes,
    login: true,
  },  

/*   {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  }, */
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
];

export default appRoutes;
