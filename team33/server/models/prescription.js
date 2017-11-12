/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prescription', {
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clinic_user',
        key: 'user_id'
      }
    },
    clinician_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clinic_user',
        key: 'user_id'
      }
    },
    medication_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'medication',
        key: 'medication_id'
      }
    },
    date_prescribed: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    dosage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    filled_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clinic_user',
        key: 'user_id'
      }
    }
  }, {
    tableName: 'prescription'
  });
};
