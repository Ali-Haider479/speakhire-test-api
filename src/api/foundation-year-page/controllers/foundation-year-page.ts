/**
 * foundation-year-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::foundation-year-page.foundation-year-page",
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
        "api::foundation-year-page.foundation-year-page",
        entityId,
        {
          populate: {
            internship_program_section:{
                populate:["cover_image.source"]
            },
            economic_mobility_section:{
                populate:["images.source"]
            },
            inter_network_section:{
                populate:["cover_image.source"]
            },
            program_outcomes_section:{
                populate:["carousel_images.source","outcomes"]
            },
            testimonial_section:{
                populate:["testimonials.cover_image.source"]
            },
            our_mission_section:{
                populate:["carousel_images.cover_image.source"]
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
