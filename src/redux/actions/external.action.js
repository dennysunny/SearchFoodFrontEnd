import {
  GET_COUNTY_SUCCESS,
  GET_COUNTY_FAILURE,
  GET_DISTRICT_SUCCESS,
  GET_DISTRICT_FAILURE,
} from '../constants';
import { externalService } from '../../services';

export const externalActions = {
  getCounty,
  getDistrict,
};

function getCounty() {
  return dispatch => {
    externalService.getCounty().then(
      data => dispatch({ type: GET_COUNTY_SUCCESS, payload: data.countyItem }),
      error => dispatch({ type: GET_COUNTY_FAILURE, payload: error })
    );
  };
}

function getDistrict(cityId) {
  return dispatch => {
    externalService.getDistrict(cityId).then(
      data => dispatch({ type: GET_DISTRICT_SUCCESS, payload: data.townItem }),
      error => dispatch({ type: GET_DISTRICT_FAILURE, payload: error })
    );
  };
}
