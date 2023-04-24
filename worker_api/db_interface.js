

const {get_product_list_wrapper, get_product_list_count_wrapper,
    getInventoryList_Wrapper, updateInventory_Wrapper,
    productStock_Wrapper} = require('../worker_api/db_api');


class db{
    get_product_list(callback){
        get_product_list_wrapper((data)=>{return callback(data)});
    }
    get_pro_list_count(callback){
        get_product_list_count_wrapper((data)=>{return callback(data)});
    }
    get_inv_list(callback){
        getInventoryList_Wrapper((data)=>{return callback(data)})
    }
    update_inv(args,callback){
        updateInventory_Wrapper(args,(data)=>{return callback(data)});
    }
    get_pro_stock(args, callback){
        productStock_Wrapper(args, (data)=>{return callback(data)});
    }
}

exports.db = db;