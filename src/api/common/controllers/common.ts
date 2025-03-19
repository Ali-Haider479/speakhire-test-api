/**
 * common controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::common.common",
  ({ strapi }) => ({
    async find(ctx) {
      // Call the default find method
      const { data, meta } = await super.find(ctx);

      // Get the homepage with all deeply nested components and relations
      const entity = await strapi.entityService.findOne(
        "api::common.common",
        data.id,
        {
          populate: {
            objective_section: {
              populate: ["objectives"],
            },
            become_partner_section: {
              populate: ["button", "cover_image", "cover_image.source"],
            },
            student_stories_section:{
              populate:['studentCards.picture.source']
            }
          },
        }
      );

      return { data: entity, meta };
    },
  })
);
