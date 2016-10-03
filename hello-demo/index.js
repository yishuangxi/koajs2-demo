import 'babel-polyfill';
import Koa from 'koa';

var app = new Koa();

app.use(async (ctx, next) => {
    console.log('111')
    await next()
    console.log('222')
})

app.use(async (ctx, next)=>{
    console.log(333)
    await next()
    console.log(444)
})

app.use(async (ctx) => {
    console.log(555)
    ctx.body = 'Hello world';
    console.log(666)
});

app.listen(3000);
