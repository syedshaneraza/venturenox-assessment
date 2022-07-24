const tenantController = require("./Controllers/TenantController");
const userController = require("./Controllers/UserController");

const router = (app) => {
  app.post("/tenants", tenantController.createTenant);
  app.get("/tenant/:id", tenantController.findUniqueTenant);
  app.get("/getTenant", tenantController.getTenant);
  app.patch("/tenant/:id", tenantController.updateTenant);
  app.delete("/tenant/:id", tenantController.deleteTenant);
  app.post("/users", userController.createUser);
  app.get("/users/:id", userController.findUniqueUser);
  app.get("/getUsers", userController.getMultipleUsers);
  app.patch("/users/:id", userController.updateUser);
  app.delete("/users/:id", userController.deleteUser);
}

module.exports = { router };
