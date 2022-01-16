import { Sequelize } from "sequelize";

const db = new Sequelize('img','root','',{
    host : 'localhost',
    dialect : 'mysql'
});


export default db;