export default ({ env }) => ({
  host: env('HOST', 'https://cms-speakhire-eeg3athramd3hgfm.eastus-01.azurewebsites.net'), //Old Host  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 80),
  url: env('PUBLIC_URL', undefined),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
