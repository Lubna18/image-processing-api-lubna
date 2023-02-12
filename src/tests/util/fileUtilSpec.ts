import { checkIfFileExist } from '../../util/fileUtil';
import path from 'path';

describe('file util to check files', () => {
  let imgPath: string;

  beforeAll(() => {
    imgPath = path.join('assets', 'images', 'fjord.jpeg');
  });

  it('test if file exist true', async () => {
    const fileExist = await checkIfFileExist(imgPath);
    expect(fileExist).toBeTruthy();
  });

  it('test if file exist false', async () => {
    imgPath = path.join('assets', 'images', 'xyz.jpeg');
    const fileExist = await checkIfFileExist(imgPath);
    expect(fileExist).toBeFalsy();
  });
});
