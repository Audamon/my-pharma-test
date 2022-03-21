import mongoose from "mongoose";

const Person = mongoose.model("Person", {
  name: String,
  email: String,
  password: String,
});

const Company = mongoose.model("Company", {
  name: String,
})

export { Person, Company };
