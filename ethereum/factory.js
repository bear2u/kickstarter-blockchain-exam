import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x92Be45d340BE7207087d14DBf5eD6b3820234A17'
);
