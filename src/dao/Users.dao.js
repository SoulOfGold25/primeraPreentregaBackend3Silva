import userModel from "./models/User.js";

export default class Users {
    getAll = async () => {
        return await userModel.find(); // ✅ solución directa
    };

    get = (params) => {
        return userModel.find(params);
    };

    getBy = (params) => {
        return userModel.findOne(params);
    };

    save = (doc) => {
        return userModel.create(doc);
    };

    update = (id, doc) => {
        return userModel.findByIdAndUpdate(id, { $set: doc });
    };

    delete = (id) => {
        return userModel.findByIdAndDelete(id);
    };
}
