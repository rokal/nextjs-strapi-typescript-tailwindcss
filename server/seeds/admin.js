const { log } = require("./utils");

async function createAdminUser() {
  const admins = await strapi.query("user", "admin").find();
  const params = {
    password: process.env.TALSEND_BACKOFFICE_PASSWORD,
    email: process.env.TALSEND_BACKOFFICE_EMAIL,
    username: "talsend",
    firstname: "Taalal",
    lastname: "Talsend",
    blocked: null,
    isActive: true,
  };
  if (admins.length === 0) {
    try {
      let verifyRole = await strapi
        .query("role", "admin")
        .findOne({ code: "strapi-super-admin" });
      if (!verifyRole) {
        verifyRole = await strapi.query("role", "admin").create({
          name: "Super Admin",
          code: "strapi-super-admin",
          description:
            "Super Admins can access and manage all features and settings.",
        });
      }
      params.roles = [verifyRole.id];
      params.password = await strapi.admin.services.auth.hashPassword(
        params.password
      );
      await strapi.query("user", "admin").create(params);
      strapi.log.info("Admin account was successfully created.");
      strapi.log.info(`Email: ${params.email}`);
    } catch (error) {
      log({
        message: "Couldn't create Admin account during bootstrap",
        error,
      });
    }
  }
}

module.exports = createAdminUser;
