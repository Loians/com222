var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
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

  console.log(data);

  var Vinhos = db.Mongoose.model("vinhos", db.VinhoSchema, "vinhos");
  var vinho = new Vinhos(data);
  vinho.save(function (err) {
    if (err) {
      console.log("Error! " + err.message);
      return err;
    } else {
      console.log("Post saved");
    }
  });
});

module.exports = router;
