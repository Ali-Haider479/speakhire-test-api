import type { Schema, Struct } from '@strapi/strapi';

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

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
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
    displayName: 'PartnerTestimonial';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.button': SharedButton;
      'shared.hero-section': SharedHeroSection;
      'shared.image': SharedImage;
      'shared.impact-lives-section': SharedImpactLivesSection;
      'shared.objective-section': SharedObjectiveSection;
      'shared.partner-component': SharedPartnerComponent;
      'shared.partner-testimonial': SharedPartnerTestimonial;
      'shared.partners-testimonials': SharedPartnersTestimonials;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.statistics-section': SharedStatisticsSection;
    }
  }
}
