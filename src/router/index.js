import Browse from '../views/Browse.vue';
import Utils from '../utils'

let routes = [
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue")
  }
];

if (Utils.config().allowExternalAccess) {
  routes.push({
    path: "/external/(.*)",
    name: "browseExternal",
    component: Browse,
    props: route => {
      return {
        path: `/external/${route.params.pathMatch}`
      };
    }
  });
}

if (!Utils.config().catalogUrl) {
  routes.push({
    path: "/",
    name: "select",
    component: () => import("../views/SelectDataSource.vue")
  });
}

routes.push({
  path: "/(.*)",
  name: "browse",
  component: Browse,
  props: route => {
    return {
      path: route.params.pathMatch
    };
  }
});

export default routes;