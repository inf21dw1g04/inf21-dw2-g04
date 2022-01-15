'use strict';
var sql = require('../utils/db.js');

/**
 * Delete Editora
 *
 * id Long 
 * no response value expected for this operation
 **//*
exports.deleteEditora = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}*/

exports.deleteEditora = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE * FROM editora WHERE id = ?", [id], function(err, res){
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else{
        console.log(res);
        resolve({"deleted":id});
      }
    });
  });
}

/**
 * Insert Editoras
 *
 * returns List
 **//*
exports.insertEditoras = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_editora" : 11,
  "nome" : "Soho Press"
}, {
  "id_editora" : 11,
  "nome" : "Soho Press"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.insertEditoras = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT * FROM editora (id_editora, nome) Values(?,?)", [body.id_editora, body.nome], function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve;
      }
    });
  });
}

/**
 * Retrieve Editoras
 *
 * returns List
 **//*
exports.retrieveEditoras = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_editora" : 11,
  "nome" : "Soho Press"
}, {
  "id_editora" : 11,
  "nome" : "Soho Press"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.retrieveEditoras = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM editora", function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
    });
  });
}

/**
 * Retrieve Editoras
 *
 * id Long 
 * returns Editoras
 **//*
exports.retrieveEditorasId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_editora" : 11,
  "nome" : "Soho Press"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.retrieveEditoraId = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM editora WHERE id = ?", [id], function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}

/**
 * Update Editoras
 *
 * body Editoras 
 * id Long 
 * no response value expected for this operation
 **//*
exports.updateEditoras = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}*/

exports.updateAutor = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT * FROM autor set id_editora = ?, nome = ?", [body.id_editora, body.nome] , function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(id);
      }
    });
  });
}