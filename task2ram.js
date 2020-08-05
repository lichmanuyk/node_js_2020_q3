const csvtojson = require("csvtojson");
const fs = require("fs");

const csvFilePath = "./csv/task-2-data.csv"
const jsonFilePath = "./task-2-Result.txt"

fs.readFile(csvFilePath, (err, data) => {
    if (err) console.log(err);
    csvtojson().fromString(data.toString()).pipe(fs.createWriteStream(jsonFilePath));
});
