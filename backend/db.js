var mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/trabFinal");

var vinhoSchema = new mongoose.Schema(
  {
    nome: String,
    pais: String,
    tipo: String,
    uva: String,
    harm: String,
  },
  { collection: "vinhos" }
);

module.exports = { Mongoose: mongoose, VinhoSchema: vinhoSchema };
