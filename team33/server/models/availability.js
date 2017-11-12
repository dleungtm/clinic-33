/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('availability', {
    timeblock_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'timeblock',
        key: 'timeblock_id'
      }
    },
    day_of_week: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clinician_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clinic_user',
        key: 'user_id'
      }
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    tableName: 'availability'
  });
};
