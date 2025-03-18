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

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    inner_text: Schema.Attribute.String;
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

export interface SharedImpactLivesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_impact_lives_sections';
  info: {
    description: '';
    displayName: 'impactLivesSection';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String;
    links: Schema.Attribute.Relation<'oneToMany', 'api::link.link'>;
    title: Schema.Attribute.String;
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

export interface SharedSimpleContentWithoutButton
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_content_without_buttons';
  info: {
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
      'shared.button': SharedButton;
      'shared.content-with-content-cards': SharedContentWithContentCards;
      'shared.ecosystem-card': SharedEcosystemCard;
      'shared.hero-section': SharedHeroSection;
      'shared.image': SharedImage;
      'shared.impact-lives-section': SharedImpactLivesSection;
      'shared.latest-news-section': SharedLatestNewsSection;
      'shared.magazine': SharedMagazine;
      'shared.objective-section': SharedObjectiveSection;
      'shared.offering-card': SharedOfferingCard;
      'shared.opportunity-for-change-component': SharedOpportunityForChangeComponent;
      'shared.outcomes': SharedOutcomes;
      'shared.partner-component': SharedPartnerComponent;
      'shared.partner-testimonial': SharedPartnerTestimonial;
      'shared.partners-testimonials': SharedPartnersTestimonials;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.simple-content-without-button': SharedSimpleContentWithoutButton;
      'shared.slider': SharedSlider;
      'shared.statistics-section': SharedStatisticsSection;
      'shared.student-card': SharedStudentCard;
      'shared.student-stories': SharedStudentStories;
      'shared.theory-of-change-component': SharedTheoryOfChangeComponent;
      'shared.what-we-offer-section': SharedWhatWeOfferSection;
      'shared.why-new-name-section': SharedWhyNewNameSection;
    }
  }
}
