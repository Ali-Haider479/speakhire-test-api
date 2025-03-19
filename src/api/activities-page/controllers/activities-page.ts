/**
 * activities-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::activities-page.activities-page',
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
            "api::activities-page.activities-page",
            entityId,
            {
              populate: {
               global_leaders_component:{
                populate:["leader_info_card.picture.source"]
               },
               speakers_impact:{
                populate:["speaker_impact.picture.source","speaker_impact.link"]
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
