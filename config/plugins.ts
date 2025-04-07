module.exports = (env) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10), // Ensure it's a number
        secure: false, // true if using port 465 (SSL), false for 587 (TLS)
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      settings: {
        defaultFrom: process.env.SMTP_USER,
        defaultReplyTo: process.env.SMTP_USER,
      },
    },
  },

  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        authType: 'default',
        account: process.env.AZURE_STORAGE_ACCOUNT,
        accountKey: process.env.AZURE_STORAGE_ACCOUNT_KEY,
        serviceBaseURL: process.env.AZURE_STORAGE_URL || undefined,
        containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
        defaultPath: "Assets",
        cdnBaseURL: null
      },
      actionOptions: {
        upload: {
          // 👇 enables thumbnail generation
          responsiveDimensions: true,
        },
      },
    },
  },
});
