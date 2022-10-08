const SftpUpload = require('sftp-upload')
require("dotenv").config({
    path: `.env`, // or '.env'
  })
const { zip } = require('zip-a-folder');
const fetch = require('node-fetch')

const upload = fn => {
    const opt = {
        host: `${process.env.SFTP_HOST}`,
        username: `${process.env.SFTP_USERNAME}`,
        password: `${process.env.SFTP_PASSWORD}`,
        remoteDir: `${process.env.SFTP_REMOTE_DIR}`,
        path: fn,
        dryRun: false,
    }
    const sftp = new SftpUpload(opt);
    return new Promise(function (resolve, reject) {
        sftp.on('error', function(err) {
            console.log(err)
            reject(err);
        }).on('uploading', function(progress) {
            console.log('Uploading', progress.file);
            console.log(progress.percent+'% completed');
        }).on('completed', function() {
            console.log('Upload Completed');
            resolve('Upload Completed')
        }).upload();
        });

}


try {
    zip('./public', './website.zip')
    .then(d0 => upload("./website.zip"))
    .then(d1 => upload("./resources/extract.php"))
    .then(d2 => fetch('http://relaunch.rc-bgdf.de/extract.php'))
    .then(d3 => d3.text())
    .then(d4 => console.log(d4))
} catch(err) {
    console.log(err)
}
