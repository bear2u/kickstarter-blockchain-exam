import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xFD338D0f5Fb2d29A856942bb5c0208cf74bA0E4a'
);

export default instance;
