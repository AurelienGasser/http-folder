A simple web server with file upload and download, written in Node.js

**Dependencies**

None

**Installation**

```
npm install -g http-folder
```

**Usage**

Start the server

```bash
$ mkdir files
$ http-folder /tmp/data 4242 # or `HTTP_FOLDER_ROOT_DIR=/tmp/files HTTP_FOLDER_PORT=4242 http-folder`
Serving /tmp/files on port 4242
```

or 

```bash
$ HTTP_FOLDER_ROOT_DIR=/tmp/files HTTP_FOLDER_PORT=4242 http-folder
Serving /tmp/files on port 4242
```

Upload:

```bash
$ cat ./original-file 
some content
$ curl --data-binary "@./original-file" http://localhost:4242/uploaded-file
```

Download:

```bash
$ curl -s http://localhost:4242/uploaded-file -o downloaded-file
$ cat downloaded-file 
some content
```