/**
 *  about controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::about.about',({ strapi }) => ({
    async find(ctx) {
      // Call the default find method
      const { data, meta } = await super.find(ctx);

      // Get the homepage with all deeply nested components and relations
      const entity = await strapi.entityService.findOne(
        "api::about.about",
        data.id,
        {
          populate: {
            hero_section: {
              populate: ["cover_image.source"],
            },
          },
        }
      );

      return { data: entity, meta };
    },
  }));
