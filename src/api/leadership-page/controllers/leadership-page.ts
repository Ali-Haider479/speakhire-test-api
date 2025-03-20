/**
 * leadership-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::leadership-page.leadership-page",
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
        "api::leadership-page.leadership-page",
        entityId,
        {
          populate: {
            dbeia_leadership_program:{
                populate:["cover_image.source","prerequisition_list"]
            },
            course_curriculum_section:{
                populate:["course_curriculum"]
            },
            leadership_courses_section:{
                populate:["leadership_courses","leadership_courses.cover_image.source","leadership_courses.outcomes"]
            },
            career_path_facilitator_section:{
                populate:["team_members","team_members.photo.source"]
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
