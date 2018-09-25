import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4526E748F2F89e8fD1826d2c755936bdD7E2d179"
);

export default instance;
