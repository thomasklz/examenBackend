import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { CineModel } from "./CineModel.js";

export const HabitacionesModel = sequelize.define(
  "habitaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombrePelicula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numHabitacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numAsientos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

CineModel.hasMany(HabitacionesModel, { foreignKey: "cine_id" });
HabitacionesModel.belongsTo(CineModel, { foreignKey: "cine_id" });
