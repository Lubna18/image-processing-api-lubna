import { promises as fsPromises } from 'fs';
import path from 'path';

async function checkIfFileExist(filePath: string): Promise<boolean> {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function createThumbDir(): Promise<void> {
  const thumbDir = path.join('assets', 'thumb');
  try {
    await fsPromises.access(thumbDir);
  } catch {
    fsPromises.mkdir(thumbDir);
  }
}

export { createThumbDir, checkIfFileExist };
