const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./src/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const controllers = require('./src/controllers');
const DatabaseHandler = require('./src/db/handler')

dotenv.config();


const init = async function () {

    const db_handler = new DatabaseHandler()
    await db_handler.init();
    db_handler.seed_db();


    const app = express();
    const PORT = process.env.PORT || 3001;

    const sess = {
        secret: 'Super secret secret',
        cookie: {
            maxAge: 300000,
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
        },
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
            db: sequelize
        })
    };
    app.use(session(sess));


    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, '/src/public')));

    app.set('views', path.join(__dirname, '/src/views'));
    app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

    app.use(controllers);

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });

}

init()