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

async function ossDelete(name, options) {
    try {
        await client.delete(name);
    } catch (error) {
        console.error(error);
    }
}

async function ossUpload(remotePath, localPath) {
    try {
        await client.put(remotePath, path.normalize(localPath));
    } catch (e) {
        console.error(e);
    }
}

async function ossList() {
    try {
        let { objects } = await client.list();
        return objects;
    } catch (error) {
        console.error(error);
    }
}

async function ossDeleteAll() {
    let objects = await ossList() || [];
    await Promise.all(objects.map((v) => ossDelete(v.name)));
}

async function ossUploadAll() {
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
        const localPath = filePath;

        const pathfgs = filePath.split(path.sep);
        pathfgs.shift();
        const remotePath = path.join(...pathfgs);

        ossUpload(remotePath, localPath);
    });
}

(async function run() {
    await ossDeleteAll();
    console.log('deleted all');
    await ossUploadAll();
    console.log('uploaded all');
})();




