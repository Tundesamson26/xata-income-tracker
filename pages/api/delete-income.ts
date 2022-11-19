import type { NextApiRequest, NextApiResponse } from "next";
import { getXataClient } from "../../util/xata";

const xata = getXataClient();

export type Response = {
  success: boolean;
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  try {
    const { id } = req.body;
    await xata.db.incomes.delete({
      id: id
    });
    res.json({
      success: true,
    });
  } catch (error: any) {
    console.log(error);
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

export default handler;
