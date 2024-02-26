import { CineModel } from "../models/CineModel.js";

export const createCine = async (req, res) => {
  try {
  const {lugar, nombreCine } = req.body;
   
   // const types = await TypeUsersModel.create(req.body);

    const cine = await CineModel.create({
      nombreCine,
      lugar
    });

    res.status(201).json({ message: "create", cine });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



export const getCine = async (req, res) => {
  try {
    const cine = await CineModel.findAll();

    res.status(200).json({cine});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

