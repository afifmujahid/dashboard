/**
 * restaurant service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::restaurant.restaurant",
  () => ({
    async find(args) {
      const { filters, user } = args as any;

      return super.find({
        ...args,
        filters: {
          ...filters,
          publishedBy: {
            id: user.id,
          },
        },
      });
    },
    async findDirectory(args) {
      const { filters } = args as any;

      return super.find({
        ...args,
        filters: {
          ...filters,
          auditStatus: "Certified",
        },
        fields: ["name", "address", "serialNumber"],
      });
    },
    async findOne(entityId, params) {
      return strapi.query("api::restaurant.restaurant").findOne({
        where: { id: entityId, publishedBy: params.user },
        populate: true,
      });
    },
    async findStatus(entityId, params) {
      return strapi.entityService.findOne(
        "api::restaurant.restaurant",
        entityId,
        {
          fields: [
            "name",
            "address",
            "phone",
            "auditStatus",
            "registrationName",
            "registrationNo",
            "businessType",
            "industryType",
            "productMarket",
          ],
        }
      );
    },
    async updateAuditStatus(user, id) {
      const entries = await strapi.entityService.findMany(
        "api::restaurant.restaurant",
        {
          filters: {
            id,
            publishedBy: {
              id: user.id,
            },
            auditStatus: "PendingRegistration",
          },
        }
      );
      if (entries.length !== 0) {
        await strapi.entityService.update("api::restaurant.restaurant", id, {
          data: {
            auditStatus: "RegistrationCompleted",
          },
        });
      }
    },
  })
);
