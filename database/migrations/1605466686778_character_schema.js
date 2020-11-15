'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CharacterSchema extends Schema {
  up() {
    this.create('characters', (table) => {
      table.increments()
      table.integer('rarity')
      table.string('icon_url')
      table.string('name')
      table.string('element')
      table.string('weapon')
      table.integer('sex')
      table.integer('nation')
      table.timestamps()
    })
  }

  down() {
    this.drop('characters')
  }
}

module.exports = CharacterSchema
