const assert = require('assert')

describe('require', () => {
  before(() => {
    require.config({
      paths: {
        'jquery': 'https://cdn.bootcss.com/jquery/2.2.1/jquery.js',
      }
    })
  })

 it('可以异步require代码', function (done) {
    require(['./base/mod/a.js'], function (mod) {
      mod.should.equal('hello world')
      done()
    })
  })

  it('加载模块可以有依赖', function (done) {
    require(['./base/mod/b.js'], function (mod) {
      mod.should.equal('Daniel: hello world')
      done()
    })
  })

  it('可以设置paths', function (done) {
    require(['jquery'], function ($) {
      $('body').length.should.equal(1)
      done()
    })
  })
})