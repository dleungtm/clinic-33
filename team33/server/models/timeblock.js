/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timeblock', {
    timeblock_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'timeblock'
  });
};
