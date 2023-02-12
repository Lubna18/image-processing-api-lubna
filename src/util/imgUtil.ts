import sharp from 'sharp';

//function to resize the image using Sharp library
async function imgUtil(
  imgPath: string,
  widthReq: number,
  heightReq: number,
  thumbImgPath: string
): Promise<unknown> {
  try {
    await sharp(imgPath)
      .resize(widthReq, heightReq)
      .toFile(thumbImgPath)
      .then(() => console.log('Successfully Image Resized'));
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default imgUtil;
