'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Comentario = use("App/Models/Comentario")

/**
 * Resourceful controller for interacting with posts
 */
class ComentarioController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const Comentarios = await Comentario.all();

    return Comentarios;

  }

  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const Data = request.only(["comentario", "id_posts"]);
    const Comentarios = await Comentario.create(Data);
    return Comentarios;
  }
  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const Comentarios = await Comentario.findOrFail(params.id);
    return Comentario;
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const Comentarios = await Comentario.findOrFail(params.id);
    await Comentarios.delete();
    return Comentarios;
  }
}

module.exports = ComentarioController
