# Dockerized webapp

_A Simple webapp made with React, express and mysql and containerized with the help of docker._

## Quick start

1. Clone this repository
2. Install docker and docker-compose in your system.
3. Run `docker-compose up` in the project root folder on local.
4. You can edit local ports(which docker will bind to localhost) inside .env in client, api and root folder.
5. By default port `3000` is assigned to `MySQL`, port `4000` is assigned to `API` and port `5000` is assigned to `REACT`.
6. If you want to change MySQL table structure, you can add you sql queries inside `/mysql/dump.sql`.
7. `/mysql/data` is for storing mysql data in local storage, so that your data inside mysql won't get erased on container removal.
