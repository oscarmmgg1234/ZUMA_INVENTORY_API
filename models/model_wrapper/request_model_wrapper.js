const {p_stock_model} = require("../request_model/product_stock_req_model");
const {p_i_u_model} = require("../request_model/product_inventory_update_model");

const p_s_m_wrapper = (args, callback) => {
    p_stock_model(args,(data)=>{return callback(data)})
}

const p_i_u_m_wrapper = (args, callback) => {
    p_i_u_model(args, (data)=>{return callback(data)});
}

exports.p_s_m_wrapper = p_s_m_wrapper;
exports.p_i_u_m_wrapper = p_i_u_m_wrapper;