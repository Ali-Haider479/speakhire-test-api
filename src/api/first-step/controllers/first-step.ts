/**
 * first-step controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::first-step.first-step',({ strapi }) => ({
    async find(ctx) {
      // Call the default find method
      const { data, meta } = await super.find(ctx);

      // Handle potential issues with data structure
      const entityId = Array.isArray(data) ? data[0]?.id : data?.id;

      if (!entityId) {
        return ctx.notFound("About entity not found");
      }

      // Get the homepage with deeply nested components and relations
      const entity = await strapi.entityService.findOne(
        "api::first-step.first-step",
        entityId,
        {
          populate: "cover_image.source",
        }
      );

      if (!entity) {
        return ctx.notFound("Entity data not found");
      }

      return { data: entity, meta };
    },
  }));
