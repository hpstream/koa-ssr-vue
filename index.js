const Koa = require('koa');
const app = new Koa();
app.use(async(ctx,next)=>{
    ctx.body ='hello world';
})

app.listen(3000,(err)=>{
    if(err) throw(err);

    console.log('listen 3000 port');
})