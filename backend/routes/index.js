var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/vinhos", function (req, res, next) {
  var db = require("../db");
  var Users = db.Mongoose.model('vinhos', db.UserSchema, 'vinhos');
  Users.find({}).lean().exec(
    function (e, docs) {
      res.write(JSON.stringify(docs));
      res.end();
    });
});



router.post("/vinho", function (req, res, next) {
  var db = require("../db");
  var data = {
    nome: req.body.nome,
    pais: req.body.pais,
    tipo: req.body.tipo,
    uva: req.body.uva,
    harm: req.body.harm,
  };

  res.setHeader("content-type","text/plain");

  for(k of Object.keys(data)){
    if(!data[k]){
      console.log(k+" veio vazio");
      res.writeHead(400);
      res.write(k+" veio vazio");
      res.end();
      return;
    }
  }

  var Vinhos = db.Mongoose.model("vinhos", db.VinhoSchema, "vinhos");
  var vinho = new Vinhos(data);
  vinho.save(function (err) {
    if (err) {
      console.log("Error! " + err.message);
      res.writeHead(500);
      res.write(err.message);
    } else {
      console.log("Post saved");
      res.write("Salvo com sucesso");
    }
    res.end();
  });
});

module.exports = router;
