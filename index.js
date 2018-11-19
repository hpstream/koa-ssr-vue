const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const Vue = require('vue');
const { createRenderer,createBundleRenderer } = require('vue-server-renderer')
const renderer = createRenderer();
const devWare = require('./dev-middleware.js');


devWare(app);

// router.get('*',async(ctx,next)=>{
//     var app = new Vue({
//         data:{
//             url:ctx.req.url
//         },
//         template:`<div>访问地址是url:{{url}}</div>`
//     })
//     renderer.renderToString(app, (err, html) => {
//         if (err) throw err
//         ctx.body = html;
//       })
// })

// router.get('/index',async(ctx,next)=>{
//     ctx.body ='index';
// })
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,(err)=>{
    if(err) throw(err);

    console.log('listen 3000 port');
})