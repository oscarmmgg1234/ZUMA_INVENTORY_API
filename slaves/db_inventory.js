const {db_init} = require('./db_connection');


const db = db_init();
db.connect();

const querys = {get_product_list: 'SELECT * FROM PRODUCT', get_product_count: 'SELECT COUNT(*) AS PRODUCT_COUNT FROM PRODUCT',
get_inventory_stock_list: 'SELECT * FROM PRODUCT_INVENTORY', update_inventory: 'UPDATE PRODUCT_INVENTORY SET STOCK = ? WHERE PRODUCT_ID = ?',
get_inventory_stock: 'SELECT * FROM PRODUCT_INVENTORY WHERE PRODUCT_ID = ?'}

const getProductList = () => {
    return new Promise((Resolve)=>{
        db.query(querys.get_product_list, (err,result)=>{
            Resolve(Object.values(JSON.parse(JSON.stringify(result))))
        })})}

const getProductListCount = () => {
    return new Promise((Resolve)=>{
        db.query(querys.get_product_count, (err,result)=>{
            Resolve(Object.values(JSON.parse(JSON.stringify(result))))   
})})}

const getInventoryList = () => {
    return new Promise((Resolve)=>{
        db.query(querys.get_inventory_stock_list, (err,result)=>{
            Resolve(Object.values(JSON.parse(JSON.stringify(result))))   
})})
}

const updateInventory = (args) => {
    return new Promise((Resolve)=>{
        //parameters as follow product id, stock,  
        db.query(querys.get_inventory_stock,args,(err,result)=>{ 
            db.query(querys.update_inventory,[Object.values(JSON.parse(JSON.stringify(result)))[0].STOCK+args[1], args[0]],(err,result)=>{
                Resolve()   })})
    })
}

const getProductStock = (args) => {
    return new Promise((Resolve)=>{
        db.query(querys.get_inventory_stock,args,(err,result)=>{
            Resolve(Object.values(JSON.parse(JSON.stringify(result))))   
})})
}



exports.getProductList = getProductList;
exports.getProductListCount = getProductListCount;
exports.getInventoryList = getInventoryList;
exports.updateInventory = updateInventory;
exports.getProductStock = getProductStock;