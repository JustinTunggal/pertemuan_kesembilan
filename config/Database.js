import { HostNotFoundError, Sequelize } from "sequelize";

const db = new Sequelize('db_product', 'root', '', { 
    host: "localhost",
    dialect: "mysql",
});

export default db;