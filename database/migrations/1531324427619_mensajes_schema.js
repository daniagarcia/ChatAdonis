'use strict'

const Schema = use('Schema')

class MensajesSchema extends Schema {
  up () {
    this.create('mensajes', (table) => {
      table.increments()
      table.float('iduser1').notNullable()
      table.float('iduser2').notNullable()
      table.string('mensaje', 500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('mensajes')
  }
}

module.exports = MensajesSchema
