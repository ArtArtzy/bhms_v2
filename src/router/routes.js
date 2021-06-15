const routes = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  },
  {
    path: "/",
    component: () => import("pages/landing.vue"),
    name: "landing"
  },
  {
    path: "/project",
    component: () => import("pages/project.vue"),
    name: "project"
  },
  {
    path: "/monitor",
    component: () => import("pages/monitor.vue"),
    name: "monitor"
  },
  {
    path: "/report",
    component: () => import("pages/report.vue"),
    name: "report"
  },
  {
    path: "/setting",
    component: () => import("pages/setting.vue"),
    name: "setting"
  },
  {
    path: "/settingmain",
    component: () => import("pages/settingmain.vue"),
    name: "settingmain"
  },
  {
    path: "/init",
    component: () => import("pages/init.vue"),
    name: "settingmain"
  }
];

export default routes;
