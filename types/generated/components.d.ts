import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBulkCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_bulk_categories';
  info: {
    displayName: 'BulkCategory';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBulkProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_bulk_process_steps';
  info: {
    displayName: 'BulkProcessStep';
    icon: 'bulletList';
  };
  attributes: {
    stepDescription: Schema.Attribute.Text;
    stepTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBulkWhoWeServe extends Struct.ComponentSchema {
  collectionName: 'components_shared_bulk_who_we_serves';
  info: {
    displayName: 'BulkWhoWeServe';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'ContactInfo';
    icon: 'phone';
  };
  attributes: {
    detail: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeaturedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_featured_videos';
  info: {
    description: '';
    displayName: 'FeaturedVideo';
    icon: 'play';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    youtube_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
    icon: 'chart-line';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote-right';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
    text: Schema.Attribute.Text;
  };
}

export interface SharedValue extends Struct.ComponentSchema {
  collectionName: 'components_shared_values';
  info: {
    displayName: 'Value';
    icon: 'heart';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_chooses';
  info: {
    displayName: 'WhyChoose';
    icon: 'check';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.bulk-category': SharedBulkCategory;
      'shared.bulk-process-step': SharedBulkProcessStep;
      'shared.bulk-who-we-serve': SharedBulkWhoWeServe;
      'shared.contact-info': SharedContactInfo;
      'shared.featured-video': SharedFeaturedVideo;
      'shared.stat': SharedStat;
      'shared.testimonial': SharedTestimonial;
      'shared.value': SharedValue;
      'shared.why-choose': SharedWhyChoose;
    }
  }
}
