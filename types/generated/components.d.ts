import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_hero_sections';
  info: {
    displayName: 'about-hero-section';
    icon: 'chartBubble';
  };
  attributes: {
    cover_image: Schema.Attribute.Component<'shared.image', false>;
    description: Schema.Attribute.Text;
    descriptionTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedActivitiesOutcomeSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_activities_outcome_sections';
  info: {
    displayName: 'ActivitiesOutcomeSection';
    icon: 'apps';
  };
  attributes: {
    carousel_images: Schema.Attribute.Component<'shared.image', true>;
    outcomes: Schema.Attribute.Component<'shared.outcomes', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBetterTommorowCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_better_tommorow_cards';
  info: {
    displayName: 'BetterTommorowCard';
    icon: 'chartBubble';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    external_url: Schema.Attribute.String;
    inner_text: Schema.Attribute.String;
    internal_url: Schema.Attribute.Relation<
      'oneToOne',
      'api::internal-url.internal-url'
    >;
    type_form_id: Schema.Attribute.String;
  };
}

export interface SharedCareerFacilitators extends Struct.ComponentSchema {
  collectionName: 'components_shared_career_facilitators';
  info: {
    description: '';
    displayName: 'CareerFacilitators';
    icon: 'chartBubble';
  };
  attributes: {
    sub_title: Schema.Attribute.Text;
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedCarouselImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousel_images';
  info: {
    displayName: 'carousel_images';
    icon: 'apps';
  };
  attributes: {
    cover_image: Schema.Attribute.Component<'shared.image', false>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedChampionActivities extends Struct.ComponentSchema {
  collectionName: 'components_shared_champion_activities';
  info: {
    displayName: 'ChampionActivities';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedChampionStoriesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_champion_stories_sections';
  info: {
    displayName: 'champion_stories_section';
    icon: 'apps';
  };
  attributes: {
    champion_story_card: Schema.Attribute.Component<
      'shared.champion-story-card',
      true
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedChampionStoryCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_champion_story_cards';
  info: {
    displayName: 'champion_story_card';
    icon: 'chartBubble';
  };
  attributes: {
    designation: Schema.Attribute.String;
    employer_logo: Schema.Attribute.Component<'shared.image', false>;
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    picture: Schema.Attribute.Component<'shared.image', false>;
  };
}

export interface SharedContentWithContentCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_with_content_cards';
  info: {
    description: '';
    displayName: 'ecoSystemSection';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    eco_system_cards: Schema.Attribute.Component<'shared.ecosystem-card', true>;
    offering_section: Schema.Attribute.Component<
      'shared.what-we-offer-section',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedContributeCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_contribute_cards';
  info: {
    displayName: 'contribute_card';
    icon: 'chartBubble';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedContributors extends Struct.ComponentSchema {
  collectionName: 'components_shared_contributors';
  info: {
    displayName: 'Contributors';
    icon: 'apps';
  };
  attributes: {
    logos: Schema.Attribute.Component<'shared.image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SharedCorporatePlanCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_corporate_plan_card_s';
  info: {
    description: '';
    displayName: 'CorporatePlanCard ';
    icon: 'chartBubble';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    hours: Schema.Attribute.String;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['corporate donor', 'individual donor']>;
  };
}

export interface SharedCorporatePlans extends Struct.ComponentSchema {
  collectionName: 'components_shared_corporate_plans';
  info: {
    displayName: 'CorporatePlans';
    icon: 'apps';
  };
  attributes: {
    corporate_plan_card: Schema.Attribute.Component<
      'shared.corporate-plan-card',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface SharedCourseCurriculum extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_curricula';
  info: {
    displayName: 'CourseCurriculum';
    icon: 'apps';
  };
  attributes: {
    course_curriculum: Schema.Attribute.Component<'shared.outcomes', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCoursesCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_courses_cards';
  info: {
    description: '';
    displayName: 'courses_card';
    icon: 'apps';
  };
  attributes: {
    application_closing_date: Schema.Attribute.String;
    course_img: Schema.Attribute.Component<'shared.image', false>;
    invite_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
    what_course_offer: Schema.Attribute.Component<'shared.outcomes', true>;
  };
}

export interface SharedDbeiaLeadershipProgram extends Struct.ComponentSchema {
  collectionName: 'components_shared_dbeia_leadership_programs';
  info: {
    displayName: 'DBEIA_Leadership_Program';
    icon: 'chartBubble';
  };
  attributes: {
    cover_image: Schema.Attribute.Component<'shared.image', false>;
    description_part1: Schema.Attribute.Text;
    description_part2: Schema.Attribute.Text;
    prerequisition_list: Schema.Attribute.Component<'shared.outcomes', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedEconomicGrowthStatistics extends Struct.ComponentSchema {
  collectionName: 'components_shared_economic_growth_statistics';
  info: {
    displayName: 'EconomicGrowthStatistics';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    statistics: Schema.Attribute.Relation<
      'oneToMany',
      'api::statistic.statistic'
    >;
    title: Schema.Attribute.Text;
  };
}

export interface SharedEconomicMobility extends Struct.ComponentSchema {
  collectionName: 'components_shared_economic_mobilities';
  info: {
    displayName: 'EconomicMobility';
    icon: 'apps';
  };
  attributes: {
    images: Schema.Attribute.Component<'shared.image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 9;
        },
        number
      >;
    title: Schema.Attribute.Text;
  };
}

export interface SharedEcosystemCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_ecosystem_cards';
  info: {
    displayName: 'EcosystemCard';
    icon: 'chartBubble';
  };
  attributes: {
    card_image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedGlobalLeadersComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_global_leaders_components';
  info: {
    description: '';
    displayName: 'global_leaders_component';
  };
  attributes: {
    description: Schema.Attribute.Text;
    leader_info_card: Schema.Attribute.Component<
      'shared.leader-info-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    description: '';
    displayName: 'SectionContent';
    icon: 'chartBubble';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    cover_image: Schema.Attribute.Component<'shared.image', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_buttons';
  info: {
    description: '';
    displayName: 'Icon Button';
    icon: 'chartBubble';
  };
  attributes: {
    external_url: Schema.Attribute.String;
    icon: Schema.Attribute.Component<'shared.image', false>;
    internal_url: Schema.Attribute.Relation<
      'oneToOne',
      'api::internal-url.internal-url'
    >;
    type_form_id: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    alternate_text: Schema.Attribute.String;
    aria_description: Schema.Attribute.String;
    source: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedImageWithVideoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_with_video_links';
  info: {
    displayName: 'imageWithVideoLink';
    icon: 'chartBubble';
  };
  attributes: {
    link: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    picture: Schema.Attribute.Component<'shared.image', false>;
  };
}

export interface SharedImpactLivesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_impact_lives_sections';
  info: {
    description: '';
    displayName: 'impactLivesSection';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video_links: Schema.Attribute.Relation<'oneToMany', 'api::link.link'>;
  };
}

export interface SharedInterCourses extends Struct.ComponentSchema {
  collectionName: 'components_shared_inter_courses';
  info: {
    description: '';
    displayName: 'InterCourses';
    icon: 'chartBubble';
  };
  attributes: {
    courses_cards: Schema.Attribute.Component<'shared.courses-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedInterNetworkSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_inter_network_sections';
  info: {
    displayName: 'InterNetworkSection';
    icon: 'chartBubble';
  };
  attributes: {
    cover_image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedJoinChangeMakerComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_join_change_maker_components';
  info: {
    description: '';
    displayName: 'JoinChangeMakerComponent';
    icon: 'chartBubble';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    description: Schema.Attribute.Text;
    partner_logos: Schema.Attribute.Component<'shared.image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 15;
        },
        number
      >;
    title: Schema.Attribute.Text;
  };
}

export interface SharedLatestNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_latest_news_sections';
  info: {
    displayName: 'LatestNewsSection';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    news: Schema.Attribute.Relation<'oneToMany', 'api::news.news'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLeaderInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_leader_info_cards';
  info: {
    displayName: 'leader_info_card';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    picture: Schema.Attribute.Component<'shared.image', false>;
    role: Schema.Attribute.String;
  };
}

export interface SharedLeaderShipCoursesCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_leader_ship_courses_cards';
  info: {
    displayName: 'LeaderShipCoursesCard';
    icon: 'chartBubble';
  };
  attributes: {
    cover_image: Schema.Attribute.Component<'shared.image', false>;
    description: Schema.Attribute.Text;
    outcomes: Schema.Attribute.Component<'shared.outcomes', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLeadershipCourses extends Struct.ComponentSchema {
  collectionName: 'components_shared_leadership_courses';
  info: {
    description: '';
    displayName: 'LeadershipCourses';
    icon: 'apps';
  };
  attributes: {
    leadership_courses: Schema.Attribute.Component<
      'shared.leader-ship-courses-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedMagazine extends Struct.ComponentSchema {
  collectionName: 'components_shared_magazines';
  info: {
    displayName: 'Magazine';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    magazines: Schema.Attribute.Relation<'oneToMany', 'api::magazine.magazine'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedObjectiveSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_objective_sections';
  info: {
    description: '';
    displayName: 'objective-section';
    icon: 'apps';
  };
  attributes: {
    objectives: Schema.Attribute.Relation<
      'oneToMany',
      'api::objective.objective'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedOfferingCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_offering_cards';
  info: {
    displayName: 'offeringCard';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpportunityForChangeComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_opportunity_for_change_components';
  info: {
    displayName: 'OpportunityForChangeComponent';
    icon: 'apps';
  };
  attributes: {
    statistics: Schema.Attribute.Relation<
      'oneToMany',
      'api::statistic.statistic'
    >;
  };
}

export interface SharedOtherwayContributeSection
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_otherway_contribute_sections';
  info: {
    description: '';
    displayName: 'OtherwayContributeSection';
    icon: 'apps';
  };
  attributes: {
    contribute_card: Schema.Attribute.Component<'shared.contribute-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOurMissionCarousal extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_mission_carousals';
  info: {
    description: '';
    displayName: 'OurMissionCarousal';
    icon: 'apps';
  };
  attributes: {
    carousel_images: Schema.Attribute.Component<'shared.carousel-images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOutcomes extends Struct.ComponentSchema {
  collectionName: 'components_shared_outcomes';
  info: {
    displayName: 'outcomes';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
  };
}

export interface SharedPartnerComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_components';
  info: {
    description: '';
    displayName: 'partnerInfoComponent';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    partner_logos: Schema.Attribute.Component<'shared.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedPartnerTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_testimonials';
  info: {
    description: '';
    displayName: 'PartnerTestimonial';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    designation: Schema.Attribute.String;
    institute_name: Schema.Attribute.String;
    instituteLogo: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedPartnersTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_shared_partners_testimonials';
  info: {
    description: '';
    displayName: 'PartnersTestimonials';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.String;
    partner_testimonial: Schema.Attribute.Component<
      'shared.partner-testimonial',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSeoContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_contents';
  info: {
    displayName: 'SEO_Content';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSimpleContentWithoutButton
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_content_without_buttons';
  info: {
    description: '';
    displayName: 'SimpleContentWithoutButton';
    icon: 'chartBubble';
  };
  attributes: {
    cover_image: Schema.Attribute.Component<'shared.image', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSpeakersImpact extends Struct.ComponentSchema {
  collectionName: 'components_shared_speakers_impacts';
  info: {
    displayName: 'speakersImpact';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    speaker_impact: Schema.Attribute.Component<
      'shared.image-with-video-link',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedStatisticsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistics_sections';
  info: {
    description: '';
    displayName: 'statisticsSection';
    icon: 'bulletList';
  };
  attributes: {
    countries_represented_map_image: Schema.Attribute.Component<
      'shared.image',
      false
    >;
    countries_represented_title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    presence_map_image: Schema.Attribute.Component<'shared.image', false>;
    presence_title: Schema.Attribute.String;
    statistics: Schema.Attribute.Relation<
      'oneToMany',
      'api::statistic.statistic'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedStudentCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_student_cards';
  info: {
    displayName: 'studentCard';
    icon: 'apps';
  };
  attributes: {
    age: Schema.Attribute.String;
    name: Schema.Attribute.String;
    picture: Schema.Attribute.Component<'shared.image', false>;
    story: Schema.Attribute.Text;
  };
}

export interface SharedStudentStories extends Struct.ComponentSchema {
  collectionName: 'components_shared_student_stories';
  info: {
    displayName: 'StudentStories';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    studentCards: Schema.Attribute.Component<'shared.student-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTeam extends Struct.ComponentSchema {
  collectionName: 'components_shared_teams';
  info: {
    displayName: 'Team';
    icon: 'chartBubble';
  };
  attributes: {
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_sections';
  info: {
    displayName: 'team_section';
    icon: 'apps';
  };
  attributes: {
    team: Schema.Attribute.Component<'shared.team', true>;
  };
}

export interface SharedTestimonialComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_components';
  info: {
    displayName: 'TestimonialComponent';
    icon: 'chartBubble';
  };
  attributes: {
    association: Schema.Attribute.String;
    cover_image: Schema.Attribute.Component<'shared.image', false>;
    description: Schema.Attribute.Text;
    designation: Schema.Attribute.String;
    employer: Schema.Attribute.String;
    highlight: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface SharedTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
    icon: 'apps';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<
      'shared.testimonial-component',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedTheoryOfChangeComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_theory_of_change_components';
  info: {
    description: '';
    displayName: 'TheoryOfChangeComponent';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionTitle: Schema.Attribute.String;
    link: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    opportunity_for_change_section: Schema.Attribute.Component<
      'shared.opportunity-for-change-component',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedWhatWeOfferSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_what_we_offer_sections';
  info: {
    description: '';
    displayName: 'whatWeOfferSection';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    offering_cards: Schema.Attribute.Component<'shared.offering-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedWhyNewNameSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_new_name_sections';
  info: {
    displayName: 'WhyNewNameSection';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-hero-section': SharedAboutHeroSection;
      'shared.activities-outcome-section': SharedActivitiesOutcomeSection;
      'shared.better-tommorow-card': SharedBetterTommorowCard;
      'shared.button': SharedButton;
      'shared.career-facilitators': SharedCareerFacilitators;
      'shared.carousel-images': SharedCarouselImages;
      'shared.champion-activities': SharedChampionActivities;
      'shared.champion-stories-section': SharedChampionStoriesSection;
      'shared.champion-story-card': SharedChampionStoryCard;
      'shared.content-with-content-cards': SharedContentWithContentCards;
      'shared.contribute-card': SharedContributeCard;
      'shared.contributors': SharedContributors;
      'shared.corporate-plan-card': SharedCorporatePlanCard;
      'shared.corporate-plans': SharedCorporatePlans;
      'shared.course-curriculum': SharedCourseCurriculum;
      'shared.courses-card': SharedCoursesCard;
      'shared.dbeia-leadership-program': SharedDbeiaLeadershipProgram;
      'shared.economic-growth-statistics': SharedEconomicGrowthStatistics;
      'shared.economic-mobility': SharedEconomicMobility;
      'shared.ecosystem-card': SharedEcosystemCard;
      'shared.global-leaders-component': SharedGlobalLeadersComponent;
      'shared.hero-section': SharedHeroSection;
      'shared.icon-button': SharedIconButton;
      'shared.image': SharedImage;
      'shared.image-with-video-link': SharedImageWithVideoLink;
      'shared.impact-lives-section': SharedImpactLivesSection;
      'shared.inter-courses': SharedInterCourses;
      'shared.inter-network-section': SharedInterNetworkSection;
      'shared.join-change-maker-component': SharedJoinChangeMakerComponent;
      'shared.latest-news-section': SharedLatestNewsSection;
      'shared.leader-info-card': SharedLeaderInfoCard;
      'shared.leader-ship-courses-card': SharedLeaderShipCoursesCard;
      'shared.leadership-courses': SharedLeadershipCourses;
      'shared.magazine': SharedMagazine;
      'shared.objective-section': SharedObjectiveSection;
      'shared.offering-card': SharedOfferingCard;
      'shared.opportunity-for-change-component': SharedOpportunityForChangeComponent;
      'shared.otherway-contribute-section': SharedOtherwayContributeSection;
      'shared.our-mission-carousal': SharedOurMissionCarousal;
      'shared.outcomes': SharedOutcomes;
      'shared.partner-component': SharedPartnerComponent;
      'shared.partner-testimonial': SharedPartnerTestimonial;
      'shared.partners-testimonials': SharedPartnersTestimonials;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.seo-content': SharedSeoContent;
      'shared.simple-content-without-button': SharedSimpleContentWithoutButton;
      'shared.slider': SharedSlider;
      'shared.speakers-impact': SharedSpeakersImpact;
      'shared.statistics-section': SharedStatisticsSection;
      'shared.student-card': SharedStudentCard;
      'shared.student-stories': SharedStudentStories;
      'shared.team': SharedTeam;
      'shared.team-section': SharedTeamSection;
      'shared.testimonial-component': SharedTestimonialComponent;
      'shared.testimonials': SharedTestimonials;
      'shared.theory-of-change-component': SharedTheoryOfChangeComponent;
      'shared.what-we-offer-section': SharedWhatWeOfferSection;
      'shared.why-new-name-section': SharedWhyNewNameSection;
    }
  }
}
