import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const CineModel = sequelize.define("cines",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    nombreCine:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lugar:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
    timestamps:false
}
)
