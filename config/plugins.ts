export default ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "slug",
        },
        case: {
          field: "slug",
          references: "slug",
        },
        event: {
          field: "slug",
          references: "slug",
        },
        report: {
          field: "slug",
          references: "slug",
        },
      },
    },
  },
  seo: {
    enabled: true,
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        secure: true,
      },
      settings: {
        defaultFrom: env("DEFAULT_FROM"),
      },
    },
  },
});
