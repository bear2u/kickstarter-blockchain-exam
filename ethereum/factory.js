import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8E2f60D835c2410Fa80A41F9a1434e309c96dCA0'
);

export default instance;
