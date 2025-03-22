/**
 * partner-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::partner-page.partner-page",
  ({ strapi }) => ({
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
        "api::partner-page.partner-page",
        entityId,
        {
          populate: {
            hero_section: {
              populate: ["button", "cover_image.source"]
            },
            economic_growth_statistics:{
                populate:["statistics"]
            },
            join_change_maker_section:{
                populate:["buttons","partner_logos.source"]
            },
            partners_objective:{
                populate:["objectives"]
            },
            talents_testimonial:{
                populate:["testimonials.cover_image.source"]
            }
          },
        }
      );

      if (!entity) {
        return ctx.notFound("Entity data not found");
      }

      return { data: entity, meta };
    },
  })
);
