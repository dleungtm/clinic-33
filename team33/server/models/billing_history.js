/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billing_history', {
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clinic_user',
        key: 'user_id'
      }
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'appointment',
        key: 'appointment_id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_paid: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'billing_history'
  });
};
