/**
 * restaurant controller
 */

import { factories } from "@strapi/strapi";
import utils from "@strapi/utils";

const { ValidationError } = utils.errors;

export default factories.createCoreController(
  "api::restaurant.restaurant",
  ({ strapi }) => ({
    async create(ctx) {
      const user = ctx.state.user;
      const restaurant = await super.create(ctx);
      const updatedRestaurant = await strapi.entityService.update(
        "api::restaurant.restaurant",
        restaurant.data.id,
        {
          data: {
            publishedBy: user.id,
          },
        }
      );
      return this.transformResponse(updatedRestaurant);
    },
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const { results, pagination } = (await strapi
        .service("api::restaurant.restaurant")
        .find({ ...sanitizedQueryParams, user: ctx.state.user })) as any;
      const sanitizedResults = await this.sanitizeOutput(results, ctx);

      return this.transformResponse(sanitizedResults, { pagination });
    },
    async findDirectory(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const { results, pagination } = (await strapi
        .service("api::restaurant.restaurant")
        .findDirectory(sanitizedQueryParams)) as any;
      const sanitizedResults = await this.sanitizeOutput(results, ctx);

      return this.transformResponse(sanitizedResults, { pagination });
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;
      const entity = await strapi
        .service("api::restaurant.restaurant")
        .findOne(id, { ...query, user: ctx.state.user });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
    async findStatus(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;
      const entity = await strapi
        .service("api::restaurant.restaurant")
        .findStatus(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
    async updateAuditStatus(ctx) {
      const { id } = ctx.request.body;

      if (!id) {
        throw new ValidationError("Invalid identifier");
      }
      const entity = await strapi
        .service("api::restaurant.restaurant")
        .updateAuditStatus(ctx.state.user, id);
      ctx.body = "ok";
    },
  })
);
