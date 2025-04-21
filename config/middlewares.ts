export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            `https://${process.env.AZURE_STORAGE_ACCOUNT}.blob.core.windows.net`,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            `https://${process.env.AZURE_STORAGE_ACCOUNT}.blob.core.windows.net`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::body',
    config: {
      formLimit: '100mb',
      jsonLimit: '100mb',
      textLimit: '100mb',
    },
  },
];
