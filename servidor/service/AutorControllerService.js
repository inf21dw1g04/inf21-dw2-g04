'use strict';
var sql = require('../utils/db.js');

/**
 * Delete Autor
 *
 * id Long 
 * no response value expected for this operation
 **//*
exports.deleteAutor = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}*/

exports.deleteAutor = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE * FROM autor WHERE id = ?", [id], function(err, res){
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
 * Insert Autor
 *
 * returns List
 **//*
exports.insertAutor = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
}, {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.insertAutor = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT * FROM autor (id_autor, nome, nacionalidade) Values(?,?,?)", [body.id_autor, body.nome, body.nacionalidade], function(err, res){
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
 * Retrieve Autor
 *
 * returns List
 **//*
exports.retrieveAutor = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
}, {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.retrieveAutor = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM autor", function(err, res){
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
 * Retrieve Autor
 *
 * id Long 
 * returns Autor
 **//*
exports.retrieveAutorId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.retrieveAutorId = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM autor WHERE id = ?", [id], function(err, res){
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
 * Update Autor
 *
 * body Autor 
 * id Long 
 * no response value expected for this operation
 **//*
exports.updateAutor = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}*/

exports.updateAutor = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT * FROM autor set id_autor = ?, nome = ?, nacionalidade = ?", [body.id_autor, body.nome, body.nacionalidade] , function(err, res){
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
