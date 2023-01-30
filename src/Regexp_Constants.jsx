const imgRegexp = /\[img:https:\/\/imagestoragemvp.s3.eu-west-2.amazonaws.com\/[^\]]*\]/g
const imgNameRegexp = /([\w\d_-]*)\.?[^\\/]*$/i
const URLRegexp = /https:\/\/[\w-]+\.s3\.[\w-]+\.amazonaws\.com\/[\w-]+\.[\w-]+/g

export { imgNameRegexp, URLRegexp, imgRegexp }
