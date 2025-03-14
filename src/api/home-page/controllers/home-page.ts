/**
 * home-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async find(ctx) {
      // Call the default find method
      const { data, meta } = await super.find(ctx);

      // Get the homepage with all deeply nested components and relations
      const entity = await strapi.entityService.findOne(
        "api::home-page.home-page",
        data.id,
        {
          populate: {
            hero_section: {
              populate: ["button", "cover_image", "cover_image.source"],
            },
            statistics_section: {
              populate: [
                "statistics",
                "presence_map_image",
                "presence_map_image.source",
                "countries_represented_map_image",
                "countries_represented_map_image.source",
              ],
            },
            impact_lives_section: {
              populate: ["links"],
            },
            objective_section:{
                populate: ["objectives"], 
            },
            partner_info_section:{
                populate:['partner_logos','partner_logos.source']
            },
            partners_testimonials_section:{
                populate:['partner_testimonial','partner_testimonial.instituteLogo.source']
            }
            // Add other sections with their nested components as needed
          },
        }
      );

      return { data: entity, meta };
    },
  })
);
