'use strict';
var sql = require('../utils/db.js');

/**
 * Delete Livro
 *
 * id Long 
 * no response value expected for this operation
 **//*
exports.deleteLivro = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}*/

exports.deleteLivro = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE * FROM livros WHERE id = ?", [id], function(err, res){
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
 * Insert Livros
 *
 * returns List
 **//*
exports.insertLivros = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
  "id_editora" : 1,
  "id_autor" : 1
}, {
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
  "id_editora" : 1,
  "id_autor" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.insertLivros = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT * FROM livro (id_livro, titulo, ano_publicacao, id_editora, id_autor) Values(?,?,?,?,?)", [body.id_livro, body.titulo, body.ano_publicacao, body.id_editora, body.id_autor], function(err, res){
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
 * Retrieve Livros
 *
 * id Long 
 * returns Livros
 **//*
exports.retrieveLivro = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
  "id_editora" : 1,
  "id_autor" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.retrieveLivroId = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM livro WHERE id = ?", [id], function(err, res){
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
 * Retrieve Livros
 *
 * returns List
 **//*
exports.retrieveLivros = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
  "id_editora" : 1,
  "id_autor" : 1
}, {
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
  "id_editora" : 1,
  "id_autor" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/

exports.retrieveLivroId = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM livro", function(err, res){
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
 * Update Livros
 *
 * body Livros 
 * id Long 
 * no response value expected for this operation
 **//*
exports.updateLivroId = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}*/

exports.updateLivro = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT * FROM livro set id_livro = ?, titulo = ?, ano_publicacao = ?, id_editora = ?, id_autor = ?", [body.id_livro, body.titulo, body.ano_publicacao, id_editora, id_autor] , function(err, res){
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