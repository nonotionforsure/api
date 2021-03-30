'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComentarioSchema extends Schema {
  up () {
    this.create('comentarios', (table) => {
      table.increments()
      table.string("comentario",300).notNullable()
      table.integer("id_posts").unsigned()
      .references("id").inTable("posts")
      .onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.timestamps()
    })
  }
  down () {
    this.drop('comentarios')
  }
}

module.exports = ComentarioSchema
