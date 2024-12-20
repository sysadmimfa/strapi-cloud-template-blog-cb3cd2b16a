module.exports = ({env}) => ({
  // ...
  "mux-video-uploader": {
    enabled: true,
    config: {
      accessTokenId: env('MUX_ACCESS_TOKEN_ID'),
      secretKey: env('MUX_ACCESS_TOKEN_SECRET'),
      webhookSigningSecret: env('MUX_WEBHOOK_SIGNING_SECRET'),
      playbackSigningId: env('MUX_SIGNING_KEY_ID'),
      playbackSigningSecret: env('MUX_SIGNING_KEY_PRIVATE_KEY'),
    }
  },
  'strapi-algolia': {
    enabled: true,
    config: {
      apiKey: env('ALGOLIA_ADMIN_KEY'),
      applicationId: env('ALGOLIA_APP_ID'),
      contentTypes: [
        { name: 'api::alankar.alankar' },
        { name: 'api::blog.blog' },
        { name: 'api::event.event' },
        { name: 'api::imfa-in-media.imfa-in-media' },
        { name: 'api::investor.investor' },
        { name: 'api::news-room.news-room' },
        { name: 'api::press-release.press-release' }
      ],
    },
  },
  // ...
});