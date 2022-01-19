const OSS = require('ali-oss');
const path = require("path");
const fs = require("fs");

require('dotenv').config({ path: ".env.local" });

const client = new OSS({
    region: process.env.DEPLOY_ALI_OSS_REGION,
    accessKeyId: process.env.DEPLOY_ALI_OSS_ACCESSKEY_ID,
    accessKeySecret: process.env.DEPLOY_ALI_OSS_ACCESSKEY_SECRET,
    bucket: process.env.DEPLOY_ALI_OSS_BUCKET
});

async function onload(remotePath, localPath) {
    try {
        // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
        // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
        const result = await client.put(remotePath, path.normalize(localPath));
        // const result = await client.put('exampleobject.txt', path.normalize('D:\\localpath\\examplefile.txt', headers));    
        if (result.res.status != 200) {
            console.log(result);
        }
    } catch (e) {
        console.log(e);
    }
}

function traverse(currentPath, callback) {
    fs.readdirSync(currentPath).forEach(function (name) {
        var filePath = path.join(currentPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            traverse(filePath, callback);
        }
    });
}

traverse("./dist", (filePath, stat) => {
    const pathfgs = filePath.split(path.sep);
    pathfgs.shift();
    const localPath = filePath;
    const remotePath = path.join(...pathfgs);
    onload(remotePath, localPath);
});

