import express, { Response } from 'express';
import path from 'path';
import imgUtil from '../util/imgUtil';
import { checkIfFileExist } from '../util/fileUtil';

const routes = express.Router();

routes.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<Response> => {
    //get query parameters
    const fileName = req.query.filename;
    const width = parseInt(req.query.width as unknown as string);
    const height = parseInt(req.query.height as unknown as string);

    //create the paths for images using Path
    const imgPath = path.join(
      'assets',
      'images',
      (fileName as string) + '.jpeg'
    );
    const thumbImgPath = path.join(
      'assets',
      'thumb',
      fileName + '_' + width + '_' + height + '_thumb.jpeg'
    );

    //console.log(`LOG : ${fileName} ${width} ${height} ${imgPath} ${thumbImgPath}`);

    const [fileExist, fileCached] = await Promise.all([
      checkIfFileExist(imgPath),
      checkIfFileExist(thumbImgPath)
    ]);

    if (width < 0 || Number.isNaN(width)) {
      res.statusCode = 404;
      res.type('text/plain');
      res.send('Width is incorrect.Kindly add it to the query param or specify a number value correctly');
    } else if (height < 0 || Number.isNaN(height)) {
      res.statusCode = 404;
      res.type('text/plain');
      res.send('Height is incorrect.Kindly add it to the query param or specify a number value correctly');
    } else if (fileName == null || !fileExist) {
      console.log('File does not Exist');
      res.statusCode = 404;
      res.type('text/plain');
      res.send(
        'File requested does not exist. Please use a correct file name.'
      );
    } else if (fileCached) {
      //load image from cache
      console.log('Load Image From Cache');
      displayImg(res, thumbImgPath);
    } else if (fileExist && !fileCached) {
      try {
        //resize img
        await imgUtil(imgPath, width, height, thumbImgPath);
        //display img
        displayImg(res, thumbImgPath);
      } catch (error) {
        res.statusCode = 500;
        res.type('text/plain');
        res.send('Error while Resizing Image =(');
      }
    }

    return res;
  }
);

function displayImg(res: express.Response, thumbImgPath: string): void {
  res.statusCode = 200;
  res.type('image/jpeg');
  res.sendFile(thumbImgPath, { root: '.' });
}

export default routes;
