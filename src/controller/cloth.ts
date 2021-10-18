import { Request, Response, NextFunction } from 'express';
import { Cloth } from '../entity/cloth';

export async function getAllClothes(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const cloth = await Cloth.find({});
    res.status(200).json({ code: 200, data: cloth });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export async function createCloth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { top_bottom, short_long, color } = req.body;
  try {
    const cloth = Cloth.create({ top_bottom, short_long, color });
    const savedCloth = await Cloth.save(cloth);
    res.status(201).json({ code: 201, data: savedCloth });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export async function updateCloth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const user = await Cloth.findOne({ where: { id } });
    const changedUser = await Cloth.update(id, req.body);
    res.status(200).json({ code: 200, message: changedUser });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export async function deleteCloth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const user = await Cloth.find({ where: { id } });
    const deleteUser = await Cloth.remove(user);
    res.status(204).json({ code: 204, message: deleteUser });
  } catch (error) {
    console.error(error);
    next(error);
  }
}
