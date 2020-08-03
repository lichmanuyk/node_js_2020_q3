import csvtojson from 'csvtojson';
import fs from 'fs';
import { pipeline } from 'stream';

const csvFilePath = "./csv/task-2-data.csv"
const jsonFilePath = "./task-2-Result.txt"

pipeline(
    fs.createReadStream(csvFilePath),
    csvtojson(),
    fs.createWriteStream(jsonFilePath, "utf8"),
    (err) => {
        if (err) {
            console.log(err);
        }
    }
)
