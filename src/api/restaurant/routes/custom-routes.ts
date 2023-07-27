export default {
  routes: [
    {
      method: "GET",
      path: "/restaurants/findStatus/:id",
      handler: "restaurant.findStatus",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/restaurants/findDirectory",
      handler: "restaurant.findDirectory",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/restaurants/updateAuditStatus",
      handler: "restaurant.updateAuditStatus",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
