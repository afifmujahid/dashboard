const config = {
  locales: ["zh"],
  tutorials: false,
  notifications: {
    releases: false,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Muslim Choice",
      "Auth.form.welcome.title": "Welcome",
      "Auth.form.welcome.subtitle": "Log in to your account",
      "Auth.form.register.subtitle":
        "Credentials are only used to authenticate. All saved data will be stored in your database.",
    },
    zh: {
      "app.components.LeftMenu.navbrand.title": "Muslim Choice",
      "Auth.form.welcome.title": "歡迎",
      "Auth.form.welcome.subtitle": "登入您的帳號",
      "Auth.form.register.subtitle":
        "認證僅用於驗證，所有儲存的資料都放在您的資料庫中。",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
