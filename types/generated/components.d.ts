import type { Schema, Struct } from '@strapi/strapi';

export interface AddressDetailsAddressDetails extends Struct.ComponentSchema {
  collectionName: 'components_address_details_address_details';
  info: {
    displayName: 'AddressDetails';
  };
  attributes: {
    AddressType: Schema.Attribute.Enumeration<
      ['Location', 'Landline', 'Mobile', 'Fax', 'Email']
    >;
    Details: Schema.Attribute.Blocks;
  };
}

export interface MediaFilesMediaFiles extends Struct.ComponentSchema {
  collectionName: 'components_media_files_media_files';
  info: {
    description: '';
    displayName: 'MediaFiles';
  };
  attributes: {
    Audio: Schema.Attribute.Media<'files' | 'audios' | 'images' | 'videos'>;
    Link: Schema.Attribute.String;
    MediaTitle: Schema.Attribute.String;
    MediaType: Schema.Attribute.Enumeration<['Video', 'Audio', 'PDF', 'Link']> &
      Schema.Attribute.DefaultTo<'PDF'>;
    mux_video: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::mux-video-uploader.mux-asset'
    >;
    PDFFile: Schema.Attribute.Media<'files' | 'videos' | 'images' | 'audios'>;
  };
}

export interface PostFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_post_feature_cards';
  info: {
    description: '';
    displayName: 'FeatureCard';
  };
  attributes: {
    CardDetails: Schema.Attribute.Blocks;
    SubTitle: Schema.Attribute.String;
  };
}

export interface PostPost extends Struct.ComponentSchema {
  collectionName: 'components_post_posts';
  info: {
    description: '';
    displayName: 'Post';
    icon: 'grid';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    imfa_in_media: Schema.Attribute.Relation<
      'oneToMany',
      'api::imfa-in-media.imfa-in-media'
    >;
    press_releases: Schema.Attribute.Relation<
      'oneToMany',
      'api::press-release.press-release'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
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

export interface SocialmediaSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_socialmedia_social_medias';
  info: {
    displayName: 'SocialMedia';
    icon: 'twitter';
  };
  attributes: {
    SocialMediaIcon: Schema.Attribute.String;
    SocialMediaLink: Schema.Attribute.String;
  };
}

export interface StatsStatsName extends Struct.ComponentSchema {
  collectionName: 'components_stats_stats_names';
  info: {
    description: '';
    displayName: 'StatsName';
    icon: 'star';
  };
  attributes: {
    ShowPlus: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    StatsName: Schema.Attribute.String;
    StatsNumber: Schema.Attribute.Integer;
  };
}

export interface UniqueIdOfAgmUniqueIdOfAgm extends Struct.ComponentSchema {
  collectionName: 'components_unique_id_of_agm_unique_id_of_agms';
  info: {
    description: '';
    displayName: 'UniqueIdOfAGM';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'address-details.address-details': AddressDetailsAddressDetails;
      'media-files.media-files': MediaFilesMediaFiles;
      'post.feature-card': PostFeatureCard;
      'post.post': PostPost;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'socialmedia.social-media': SocialmediaSocialMedia;
      'stats.stats-name': StatsStatsName;
      'unique-id-of-agm.unique-id-of-agm': UniqueIdOfAgmUniqueIdOfAgm;
    }
  }
}
