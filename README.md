HTTP Folder [![npm version](https://badge.fury.io/js/http-folder.svg)](https://badge.fury.io/js/http-folder)
----

A simple web server with file upload and download, written in Node.js

---

### Dependencies

None

### Installation

```
npm install -g http-folder
```

### Usage

```bash
# Start the server
$ mkdir files
$ http-folder /tmp/data 4242 # or `HTTP_FOLDER_ROOT_DIR=/tmp/files HTTP_FOLDER_PORT=4242 http-folder`
Serving /tmp/files on port 4242
# or HTTP_FOLDER_ROOT_DIR=/tmp/files HTTP_FOLDER_PORT=4242 http-folder

# Upload
$ cat ./original-file 
some content
$ curl --data-binary "@./original-file" http://localhost:4242/uploaded-file

# Download
$ curl -s http://localhost:4242/uploaded-file -o downloaded-file
$ cat downloaded-file 
some content
```

### Acknowledgements

Largely based on https://github.com/krvikash35/nodejs-download-upload-server
