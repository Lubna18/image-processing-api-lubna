import imgUtil from '../../util/imgUtil';
import path from 'path';

describe('image util to process images', () => {
  it('test image resize', async () => {
    const imgPath = path.join('assets', 'images', 'fjord.jpeg');
    const thumbImgPath = path.join(
      'assets',
      'thumb',
      'fjord_200_200_thumb.jpeg'
    );

    const result = await imgUtil(imgPath, 200, 200, thumbImgPath);
    expect(result).not.toBeNull();
  });
});
