import Vue from 'vue';
import Router from 'uni-simple-router';

import systemIndex from './modules/system/index';
console.log(systemIndex);

export default new Router({
	encodeURI: false,
	routes: [
		...systemIndex
	]
});

Vue.use(Router);