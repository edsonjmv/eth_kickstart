import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xD8a0684Ec4C7b454Df5Dc836615B6Fa66A82f34D"
);

export default instance;
