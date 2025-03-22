/**
 * champions-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::champions-page.champions-page",
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
        "api::champions-page.champions-page",
        entityId,
        {
          populate: {
            hero_section: {
              populate: ["button", "cover_image.source"],
            },
            champion_activities_section: {
              populate: ["contribute_card.button"],
            },
            other_way_to_impact_section: {
              populate: ["contribute_card.button"],
            },
            leading_companies_section: {
              populate: ["buttons", "partner_logos.source"],
            },
            champion_testimonial_section: {
              populate: ["testimonials.cover_image.source"],
            },
            champion_stories_section: {
              populate: [
                "champion_story_card.picture.source",
                "champion_story_card.employer_logo.source",
              ],
            },
            become_champion_section:{
                populate:["button","cover_image.source"]
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
