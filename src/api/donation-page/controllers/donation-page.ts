/**
 * donation-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::donation-page.donation-page",
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
        "api::donation-page.donation-page",
        entityId,
        {
          populate: {
            hero_section:{
                populate:["button","cover_image.source"]
            },
            corporate_plans_section:{
                populate:["corporate_plan_card.button"]
            },
            better_tomorrow_card:{
                populate:["buttons"]
            },
            donation_changes_lives:{
                populate:["images.source"]
            },
            otherway_contribute_section:{
                populate:["contribute_card.button"]
            },
            contributors_section:{
                populate:["logos.source"]
            },
            donationTestimonals:{
                populate:["cover_image.source"]
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
