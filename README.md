# bmg-general-user-management
a frontend application, a RESTful API backend, and a database demo.

The application should allow the user to create and delete user accounts (sign-in/sign-up or
authentication are not required), consider it as part of an administration panel that manages the
system user accounts and the administrator is already logged in.


## Deploymnet guide.
To start services
```Bash
docker-compose pull
docker-compose up
# Then access browser at URL: http://localhost:3000/
```

## Backup/Restore Database.
```Bash
docker exec -i mongo mongodump --archive --gzip --db bmg > bmg.gz
```
Restore:
```Bash
docker exec -i mongo mongorestore --archive --gzip --db bmg < bmg.gz
```
