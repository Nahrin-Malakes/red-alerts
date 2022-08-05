import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const options = {
        headers: {
          Referer: "https://www.oref.org.il/11226-he/pakar.aspx",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
        },
      };

      const response = await axios.get(
        "https://www.oref.org.il/WarningMessages/alert/alerts.json",
        options
      );
      console.log(response.data);
      res.status(200).json({
        alerts: response.data,
      });

      break;
  }
};

export default handler;

