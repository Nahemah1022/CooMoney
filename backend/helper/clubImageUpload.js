const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


// AWS authorization
AWS.config.update({
    accessKeyId : process.env.AWSAccessKeyId,
    secretAccessKey : process.env.AWSSecretKey,
    region: 'ap-northeast-2',
})

let s3 = new AWS.S3();

let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.CLUB_BUCKET_NAME,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: (req, file, cb) => {
            cb(null, {fieldName: file.fieldname});
        },
        key: async function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})

module.exports = upload;