let image_path = process.cwd() + '/public/images/';
// const image_path = "../../public/images/";

// const image_dir = require('path').join(__dirname, image_path);
import axios from './image_axios';
import fs, { createWriteStream } from 'fs';
import * as stream from 'stream';
import { promisify } from 'util';


const finished = promisify(stream.finished);


async function downloadImage(url: string): Promise<any> {
  let filename = url.split('/').pop();
  const writer = createWriteStream(image_path + filename);
  return await axios.get(url, { responseType: 'stream' }).then(response => {
    // fs.writeFileSync(image_dir + filename, response.data);
    response.data.pipe(writer);
    return finished(writer); //this is a Promise
  }).catch((error) => {
    console.log(error);
  });

}

export default downloadImage;