class product_inventory_update_req{
    product_id = null;
    product_stock = null;
    constructor(args){
        this.product_id = args.product_id ? args.product_id : null;
        this.product_stock = args.product_stock ? args.producct_stock : null;
    }

    validate(){
        if(this.product_id == null || this.product_stock == null){
            return false;
        }
        return true;
    }
}

const p_i_u_model = (args,callback) => {
    return callback(new product_inventory_update_req(args));
}

exports.p_i_u_model = p_i_u_model;