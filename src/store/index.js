import { createStore } from 'vuex';
import productsModule from './modules/products';
import salesModule from './modules/Sale';
import cartModule from './modules/Cart';
const store = createStore ({
modules : {
    prods:productsModule,
    sales:salesModule,
    cart:cartModule

}


});


export default store;