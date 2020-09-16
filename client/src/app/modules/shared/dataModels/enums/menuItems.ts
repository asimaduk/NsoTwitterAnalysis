import {MENU_ITEMS_NAMING} from "../constants";

export const MenuItems: NavItem[] = [
  {
    name: MENU_ITEMS_NAMING.home,
    loggedInUrl: '/home',
    loggedOutUrl: '/home',
    showWhenLoggedIn: true,
    alwaysShow: false,
    children: []
  },
  // {
  //   name: MENU_ITEMS_NAMING.listings,
  //   loggedInUrl: '/listings',
  //   loggedOutUrl: '/listings',
  //   showWhenLoggedIn: true,
  //   alwaysShow: true,
  //   children: []
  // },
  // {
  //   name: MENU_ITEMS_NAMING.marketInsights,
  //   loggedInUrl: '/market-insight',
  //   loggedOutUrl: '/market-insight',
  //   showWhenLoggedIn: true,
  //   alwaysShow: true,
  //   children: []
  // },
  // {
  //   name: MENU_ITEMS_NAMING.dashboards,
  //   loggedInUrl: '',
  //   loggedOutUrl: '',
  //   showWhenLoggedIn: true,
  //   alwaysShow: false,
  //   children: [
  //     {
  //       name: MENU_ITEMS_NAMING.dashboardsChildren.broker,
  //       loggedInUrl: '/dashboard/broker',
  //       showWhenLoggedIn: true
  //     },
  //     {
  //       name: MENU_ITEMS_NAMING.dashboardsChildren.buyer,
  //       loggedInUrl: '/dashboard/buyer',
  //       showWhenLoggedIn: true
  //     },
      // {
      //   name: MENU_ITEMS_NAMING.dashboardsChildren.seller,
      //   loggedInUrl: '/dashboard/seller',
      //   showWhenLoggedIn: true
      // }
  //   ]
  // },
  // {
  //   name: MENU_ITEMS_NAMING.deals,
  //   loggedInUrl: '/deals',
  //   loggedOutUrl: '/deals',
  //   showWhenLoggedIn: true,
  //   alwaysShow: true,
  //   children: []
  // },
  // {
  //   name: MENU_ITEMS_NAMING.blog,
  //   loggedInUrl: '/',
  //   loggedOutUrl: '/',
  //   showWhenLoggedIn: true,
  //   alwaysShow: true,
  //   children: []
  // },
  // {
  //   name: MENU_ITEMS_NAMING.about,
  //   loggedInUrl: '/about',
  //   loggedOutUrl: '/about',
  //   showWhenLoggedIn: false,
  //   alwaysShow: false,
  //   children: []
  // },
  // {
  //   name: MENU_ITEMS_NAMING.contact,
  //   loggedInUrl: '/contact-us',
  //   loggedOutUrl: '/contact-us',
  //   showWhenLoggedIn: true,
  //   alwaysShow: true,
  //   children: []
  // },
  // {
  //   name: MENU_ITEMS_NAMING.evaluateMyBusiness,
  //   loggedInUrl: '/business-evaluation',
  //   loggedOutUrl: '/business-evaluation',
  //   showWhenLoggedIn: true,
  //   alwaysShow: true,
  //   children: []
  // }
];

export const MiniSiteMenuItems: NavItem[] = [
  {
    name: MENU_ITEMS_NAMING.home,
    loggedInUrl: '/home',
    loggedOutUrl: '/home',
    showWhenLoggedIn: false,
    alwaysShow: true,
    children: []
  },
  // {
  //   name: MENU_ITEMS_NAMING.about,
  //   loggedInUrl: '/about',
  //   loggedOutUrl: '/about',
  //   showWhenLoggedIn: false,
  //   alwaysShow: true,
  //   children: []
  // },
  // {
  //   name: MENU_ITEMS_NAMING.contact,
  //   loggedInUrl: '/contact-us',
  //   loggedOutUrl: '/contact-us',
  //   showWhenLoggedIn: true,
  //   alwaysShow: true,
  //   children: []
  // },
  // {
  //   name: MENU_ITEMS_NAMING.evaluateMyBusiness,
  //   loggedInUrl: '/business-evaluation',
  //   loggedOutUrl: '/business-evaluation',
  //   showWhenLoggedIn: true,
  //   alwaysShow: true,
  //   children: []
  // }
];

export interface NavItem {
  name: string;
  loggedInUrl?: string;
  loggedOutUrl?: string;
  alwaysShow: boolean;
  showWhenLoggedIn: boolean;
  children?: ChildItem[];
}

export interface ChildItem {
  name?: string;
  loggedInUrl?: string;
  showWhenLoggedIn: boolean;
}
