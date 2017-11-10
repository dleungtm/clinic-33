const Sequelize = require('sequelize');
const sequelize = new Sequelize('d1vm6sqmtd3cpr', 'lqwspsurvpdnxk', '62ca990098f4d268a62a8f66cc213c392079e540ed8037f5fe1ca2731cde4a4c', {
  host: 'ec2-23-23-78-213.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  pool: {
      max: 10,
      min: 0,
      idle: 30000
  },
  define: {
      timestamps: false
  }
});

module.exports = sequelize;