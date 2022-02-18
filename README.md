# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## User data from seeders

Admin users


``` 

Name: Rick
Email: testAdminEmail1@gmail.com
Password: adminPasswordOT118!


Name: Federico
Email: testAdminEmail2@gmail.com
Password: adminPasswordOT118!


Name: Miles
Email: testAdminEmail3@gmail.com
Password: adminPasswordOT118!


```


Regular users


``` 

Name: Pepe
Email: testEmail@gmail.com
Password: passwordOT118!


Name: Rosa
Email: testEmail1@gmail.com
Password: passwordOT118!


Name: Jorge
Email: testEmail2@gmail.com
Password: passwordOT118!


```
