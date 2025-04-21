/**
 * app-header controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::app-header.app-header',({ strapi }) => ({
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
        "api::app-header.app-header",
        entityId,
        {
          populate: {
            "header_buttons":{
                populate:["internal_url"]
            },
            "header_icon_buttons":{
                populate:["icon.source","internal_url"]
            },
            "header_links":{
                populate:["internal_url"]
            },
            "activities_links":{
                populate:["internal_url"]
            }
          },
        }
      );

      if (!entity) {
        return ctx.notFound("Entity data not found");
      }

      return { data: entity, meta };
    },
  }));
