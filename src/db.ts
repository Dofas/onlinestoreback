import { Sequelize } from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,
});

sequelize
    .sync()
    .then(() => {
        console.log('Db started');
    })
    .catch((error) => console.log(`db failed to start ${error.message}`));

export default sequelize;
