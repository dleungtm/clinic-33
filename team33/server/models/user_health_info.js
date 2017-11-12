/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_health_info', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clinic_user',
        key: 'user_id'
      }
    },
    phn: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    blood_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'user_health_info'
  });
};
