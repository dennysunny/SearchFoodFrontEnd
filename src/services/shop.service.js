import {
  apiGetStoreType,
  apiCreateStore,
  apiGetStores,
  apiGetStore,
} from '../helpers/apis';

export const shopService = {
  getStoreType,
  createStore,
  searchStore,
  fetchStore,
  createMessage,
};

function getStoreType() {
  return apiGetStoreType();
}

function createStore(data) {
  return apiCreateStore(data);
}

function searchStore(data) {
  // 中文亂碼，因此先進行encode，再由後端decode
  const encodeData = {
    foodType: encodeURI(data.foodType),
    city: encodeURI(data.city),
    district: encodeURI(data.district),
  };
  return apiGetStores(encodeData);
}

function fetchStore(data) {
  return apiGetStore({ store_id: data });
}

function createMessage(data) {
  console.log(data);
  return Promise.resolve('success');
}
