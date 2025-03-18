/**
 *  about controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::about.about', ({ strapi }) => ({
    async find(ctx) {
        // Call the default find method
        const { data, meta } = await super.find(ctx);

        // Handle potential issues with data structure
        const entityId = Array.isArray(data) ? data[0]?.id : data?.id;

        if (!entityId) {
            return ctx.notFound('About entity not found');
        }

        // Get the homepage with deeply nested components and relations
        const entity = await strapi.entityService.findOne(
            "api::about.about",
            entityId,
            {
                populate: {
                    hero_section: {
                        populate: ["cover_image.source"],
                    },
                    about_ecosystem: {
                        populate: ["cover_image.source"],
                    },
                    theory_of_change_section: {
                        populate: ["link", "opportunity_for_change_section.statistics"],
                    },
                    why_new_name_section: {},
                    meet_visionary_section: {
                        populate: ["button", "cover_image.source"],
                    },
                    magazine_section: {
                        populate: ["magazines.cover_image.source"],
                    },
                    latest_news: {
                        populate: ["news.cover_image.source"],
                    },
                    activities_outcome_section: {
                        populate: ["outcomes", "carousel_images.source"],
                    },
                },
            }
        );

        if (!entity) {
            return ctx.notFound('Entity data not found');
        }

        return { data: entity, meta };
    },
}));

