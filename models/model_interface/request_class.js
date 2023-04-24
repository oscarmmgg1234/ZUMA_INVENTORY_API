const {p_s_m_wrapper, p_i_u_m_wrapper} = require("../model_wrapper/request_model_wrapper")


class request{
    p_s_model(args,callback){
        p_s_m_wrapper(args, (data)=>{return callback(data)})
    }
    p_i_u_model(args,callback){
        p_i_u_m_wrapper(args, (data)=>{return callback(data)})
    }
}

exports.request = request;