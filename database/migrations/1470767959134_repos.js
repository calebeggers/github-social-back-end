'use strict'

const Schema = use('Schema')

class RepoSchema extends Schema {

//     =====================================================================================
//     (IN 'REPO' MODEL AFTER ./ace make:model Repo)
//     return this.belongsTo('App/Model/User')
//
//     (IN 'REPO' MODEL AFTER ./ace make:migration comments + ./ace make:model Comment)
//     return this.hasMany('App/Model/Comments')
//     =====================================================================================

  up () {
    this.create('repos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('github').references('github').inTable('users')
      table.string('orig_creator')
      table.string('title')
      table.string('description')
      table.string('language')
      table.string('create_date')
      table.timestamps()

    })
  }

  down () {
    this.drop('repos')
    }
  }

module.exports = RepoSchema
