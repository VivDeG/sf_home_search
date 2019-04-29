import * as HomeApiUtil from '../util/home_api_util';

export const RECEIVE_ALL_HOMES = 'RECEIVE_ALL_HOMES';

export const receiveAllHomes = homes => ({
  type: RECEIVE_ALL_HOMES,
  homes,
});

export const fetchAllHomes = () => dispatch => (
  HomeApiUtil.fetchAllHomes().then( homes => dispatch(receiveAllHomes(homes)) )
);