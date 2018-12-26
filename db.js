const Sequelize = require("sequelize");

//elephantsql endpoint
// const sequelize = new Sequelize(
//     "postgres://sqgzgnbw:WoPjlvggdtraqV3QvLMOHRPY5eaYVFSZ@baasu.db.elephantsql.com:5432/sqgzgnbw"
// );

//AWS RDS endpoint
const sequelize = new Sequelize(
     "postgres://h3samayoa:hugosama123@todo-db.cupry8ehqxda.us-west-1.rds.amazonaws.com:5432/todo_db"
 );

const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
    Sequelize,
    sequelize,
    todo
};

db.sequelize.sync();

module.exports = db;