class product_stock_model{
 product_id = ""
 constructor(args){
    this.product_id = args.product_id ? args.product_id : null;
 }

 validate(){
    if(this.product_id == null){
        return false;
    }
    return true;
 }
}

const p_s_model = (args, callback) => {
    return callback(new product_stock_model(args));
}

exports.p_stock_model = p_s_model;