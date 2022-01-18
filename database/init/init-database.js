var adminDb = db.getSiblingDB("admin");

adminDb.createUser({
  user: "server",
  pwd: "4cU5VRdiWy4VB66u",
  roles: [
    {
      role: "readWrite",
      db: "testing_altsc",
    },
  ],
});
