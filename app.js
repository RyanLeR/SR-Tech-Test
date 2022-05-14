const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");


(async () => {

const entries = await csv().fromFile("interFinal.csv");

console.log(entries)

const carsInCsv = new Parser({ fields: ["sector_id", "name", "count", "percentage"]}).parse(entries);
fs.writeFileSync("cars.csv", carsInCsv);

})();