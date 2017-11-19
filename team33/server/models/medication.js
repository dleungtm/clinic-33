/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medication', {
    medication_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    unit_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'medication'
  });
};
