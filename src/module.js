import albumReducer from './containers/reducer';
export function getAlbumModule() {
  return {
    id: 'albumsStore-3e5e3581-9f7a-4b28-b449-b156853b3efd',
    albumStore: albumReducer,
    sagas: [],
  };
}
