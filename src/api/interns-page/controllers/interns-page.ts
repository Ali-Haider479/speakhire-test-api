/**
 * interns-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::interns-page.interns-page',
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
          'api::interns-page.interns-page',
          entityId,
          {
            populate: {
                hero_section:{
                    populate:["button","cover_image.source"]
                },
                intership_courses:{
                    populate:["courses_cards.course_img.source","courses_cards.what_course_offer"]
                },
                alumins_testimonials:{
                    populate:["testimonials.cover_image.source"]
                },
                apply_now_section:{
                    populate:["button","cover_image.source"]
                },
                national_mentorship_month:{
                    populate:["images.source"]
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
