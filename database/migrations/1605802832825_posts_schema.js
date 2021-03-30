'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string("texto",200).notNullable()
      table.integer("id_user").unsigned()
      .references("id").inTable("users")
      .onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
