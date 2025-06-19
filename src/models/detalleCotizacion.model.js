const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DetalleCotizacion = sequelize.define('DetalleCotizacion', {
  cotizacionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'cotizaciones',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precioUnitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM('bien', 'servicio'),
    allowNull: false,
    defaultValue: 'bien'
  }
}, {
  tableName: 'detalle_cotizaciones',
  timestamps: true
});

module.exports = DetalleCotizacion;