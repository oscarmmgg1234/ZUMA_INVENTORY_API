const {getProductList, getProductListCount, getInventoryList, updateInventory, getProductStock} = require('../slaves/db_inventory')

const productListGet = async (callback) => {
    const db_data = await getProductList();
    return callback(db_data);
}

const productListCount = async (callback) => {
    const db_data = await getProductListCount();
    return callback(db_data);
}

const inventoryListGet = async (callback) => {
    const db_data = await getInventoryList();
    return callback(db_data);
}

const update_inventory = async (args) => {
    await updateInventory(args);
}

 const productStockGet = async (args, callback) => {
    const db_data = await getProductStock(args);
    return callback(db_data);
 }


exports.get_product_list_wrapper = productListGet;
exports.get_product_list_count_wrapper = productListCount;
exports.getInventoryList_Wrapper = inventoryListGet;
exports.updateInventory_Wrapper = update_inventory;
exports.productStock_Wrapper = productStockGet;