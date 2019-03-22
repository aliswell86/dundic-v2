import axios from 'axios';

export const getAuctionLowPrice = () => axios.get('/api/teranium/lowprice');