'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

class ApiController extends Controller{
	async getUser(){
		const { ctx } = this;
		ctx.body = '1';
	}
}

module.exports = { 
	HomeController,
	ApiController
};
