// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const server = require("http").Server(app);


// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
/*const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
*/
server.listen(3000);


//ouverture  de la base de donnée

const sqlite3 = require('sqlite3');
sqlite3.verbose();
let db = new sqlite3.Database('main.db', err => {
  if(err)
  { throw err}

  console.log('creation');
})

db.run('CREATE TABLE IF NOT EXISTS `admin`  ( `Id` int(11) NOT NULL , `MotDePasse`  varchar(255) NOT NULL , `Login`  varchar(255) NOT NULL,PRIMARY KEY(`Id`))')
db.run('CREATE TABLE IF NOT EXISTS `categorie` (`Id` int(11) NOT NULL,`NomCategorie` varchar(255) NOT NULL,PRIMARY KEY(`Id`))')
db.run('CREATE TABLE IF NOT EXISTS `utilisateur` (`Id` int(11) NOT NULL ,`MotDePasse` varchar(255) NOT NULL,`Nom` varchar(255) NOT NULL,`Prenom` varchar(255) NOT NULL,`Adresse-postale` varchar(255) NOT NULL,`Tel` varchar(10) NOT NULL,`Email` varchar(255) NOT NULL,PRIMARY KEY(`Id`))')
db.run('CREATE TABLE IF NOT EXISTS `commande` (`Num` int(11) NOT NULL ,`IdUtilisateur` int(11) NOT NULL,`AdresseLivraison` varchar(255) NOT NULL,`QuantiteCommande` int(10) NOT NULL,`Montant` int(10) NOT NULL,`DateCommande` date NOT NULL,PRIMARY KEY(`Num`),FOREIGN KEY (IdUtilisateur)REFERENCES utilisateur(Id))')
db.run('CREATE TABLE IF NOT EXISTS `facture` (`Id` int(11) NOT NULL ,`NumCommande` int(11) NOT NULL,`DateCommande` date NOT NULL,`MontantTotal` int(10) NOT NULL,PRIMARY KEY(`Id`), FOREIGN KEY(Numcommande)REFERENCES commande(Num)) ')
db.run('CREATE TABLE IF NOT EXISTS `infolivraison` (`NumEnvoi` int(11) NOT NULL,`IdUtilisateur` int(11) NOT NULL,`DateArrivePrevu` date NOT NULL,`PrixLivraison` int(10) NOT NULL,PRIMARY KEY(`NumEnvoi`),FOREIGN KEY(IdUtilisateur)REFERENCES utilisateur(Id))')
db.run('CREATE TABLE IF NOT EXISTS `paiement` (`NumCarte` int(11) NOT NULL , `DatePaiement` date NOT NULL,`Code` int(10) NOT NULL, `SoldeCarte` int(11) NOT NULL,`TypeCarte` varchar(255) NOT NULL,PRIMARY KEY(`NumCarte`))')
db.run('CREATE TABLE IF NOT EXISTS `produit` (`Id` int(11) NOT NULL ,`NomProduit` varchar(255) NOT NULL,`Description` varchar(255) NOT NULL,`Marque` varchar(255) NOT NULL,`Prix` int(10) NOT NULL,PRIMARY KEY(`IdProduit`))')
db.run('CREATE TABLE IF NOT EXISTS `stock` (`Id` int(11) NOT NULL ,`Quantité` int(10) NOT NULL,`IdProduit` int(11) NOT NULL,PRIMARY KEY(`Id`),FOREIGN KEY(IdProduit)REFERENCES produit(Id))')
db.run('CREATE TABLE IF NOT EXISTS `panier` (`Id` int(11) NOT NULL,`IdProduit` int(11) NOT NULL,`IdUtilisateur` int(11) NOT NULL, PRIMARY KEY(`Id`),FOREIGN KEY(IdProduit)REFERENCES produit(Id),FOREIGN KEY (IdUtilisateur)REFERENCES utilisateur(`Id`))')

//db.run('INSERT INTO `utilisateur` (`Id`, `MotDePasse`, `Nom`, `Prenom`, `Adresse-postale`, `Tel`, `Email`) VALUES(1, "aws", "afouchal", "ayoub", "6 rue edouard charton", "0688282820", "ayoub.afouchal@gmail.com")')

db.close()


