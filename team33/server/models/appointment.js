/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointment', {
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: true
    },
    timeblock_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'timeblock',
        key: 'timeblock_id'
      }
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clinic_user',
        key: 'user_id'
      }
    },
    clinician_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clinic_user',
        key: 'user_id'
      }
    }
  }, {
    tableName: 'appointment'
  });
};
