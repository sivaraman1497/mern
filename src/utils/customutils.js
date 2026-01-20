import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

export function stop()
{
    process.exit();
}

export function getEnvFile(traverseVal)
{
    var traverse = Array(traverseVal).fill('../');                      // code to dynamically traverse the env file
    traverse = traverse.join('');

    const currentURL = import.meta.url;                                 // gets current folder path in file format
    const currentPath = fileURLToPath(currentURL);                      // converts path to a web url format
    const dirname = path.dirname(currentPath)                           // gets given path's folder name
    const absolutePath = path.resolve(dirname, `${traverse}/.env`);     // builds absolute path (ie., from root dir)

    dotenv.config({path: absolutePath});
}