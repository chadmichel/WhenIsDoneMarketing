# WhenIsDoneMarketing

Simple static marketing site for **When Is Done?**, designed for hosting in an S3 bucket behind CloudFront.

## Local preview

Open `/tmp/workspace/chadmichel/WhenIsDoneMarketing/index.html` directly in a browser, or serve the directory with any static file server.

## Deployment notes

- Upload all files in this repository root to your S3 bucket.
- Keep `index.html` as the default root object in CloudFront.
- Files use relative paths to work cleanly with S3 + CloudFront static hosting.