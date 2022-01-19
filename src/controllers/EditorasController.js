'use strict';

var utils = require('../utils/writer.js');
var EditorasController = require('../service/EditorasControllerService');

module.exports.deleteEditora = function deleteEditora (req, res, next, id) {
  EditorasController.deleteEditora(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertEditoras = function insertEditoras (req, res, next) {
  EditorasController.insertEditoras()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEditoras = function retrieveEditoras (req, res, next) {
  EditorasController.retrieveEditoras()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEditorasId = function retrieveEditorasId (req, res, next, id) {
  EditorasController.retrieveEditorasId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEditoras = function updateEditoras (req, res, next, body, id) {
  EditorasController.updateEditoras(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
