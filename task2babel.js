import csvtojson from 'csvtojson';
import fs from 'fs';

const csvFilePath = "./csv/task-2-data.csv"
const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream("./task-2-Result.txt", "utf8");

readStream.pipe(csvtojson()).pipe(writeStream).on('error', (err) => process.stderr.write(err));
