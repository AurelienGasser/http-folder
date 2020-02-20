HTTP Folder
----

A simple web server with file upload and download, written in Node.js

[![npm version](https://badge.fury.io/js/http-folder.svg)](https://badge.fury.io/js/http-folder)

[![nodesource/node](http://dockeri.co/image/aureliengasser/http-folder)](https://registry.hub.docker.com/r/aureliengasser/http-folder)

### TL;DR

- `POST /my-file` to upload a file
- `GET /my-file` to download a file
- `DELETE /my-file` to delete a file
- `GET /` to list the files

There are no subfolders, only one root folder.

### Dependencies

None

### Installation

Install locally:

```
npm install -g http-folder
```

On kubernetes, you can use the [public helm repository](https://github.com/AurelienGasser/charts).

### Usage

```bash
# Start the server
$ mkdir files
$ http-folder /tmp/data 4242
Serving /tmp/files on port 4242
# or HTTP_FOLDER_ROOT_DIR=/tmp/files HTTP_FOLDER_PORT=4242 http-folder

# Upload
$ cat original-file
some content
$ curl --data-binary "@original-file" http://localhost:4242/uploaded-file

# Download
$ curl -s http://localhost:4242/uploaded-file -o downloaded-file
$ cat downloaded-file
some content

# Delete
$ curl -XDELETE http://localhost:4242/uploaded-file
Deleted successfully$
```

### Acknowledgements

Largely based on https://github.com/krvikash35/nodejs-download-upload-server
