import {createStore} from 'redux-dynamic-modules';
import {compose} from 'redux';
import {getAlbumModule} from './module';

const store = createStore({}, [compose()], getAlbumModule());

export default store;
