const Todo_model = require('./todo_item');

module.exports.gets = function () {
    return Todo_model.find()
};

module.exports.getById = function (paramsId) {
    return Todo_model.findById(paramsId)
};

module.exports.add = function (data) {
    let Task = new Todo_model({
        task: data.task,
    });

    return Task.save()
};

module.exports.update = function (data, paramsId) {
    let updatedTask = {
        task: data.task
    };

    return Todo_model.findByIdAndUpdate( paramsId, { $set: updatedTask }, {new: true})
};

module.exports.delete = function (paramsId) { return Todo_model.findByIdAndRemove(paramsId) };
