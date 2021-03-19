/**
 * 自定义服务的原因
 * next 的路由系统是根据pages文件夹下的文件生成的，所以对于/home/1 这种形式的动态路由就没有办法处理了，因为pages目录下home文件夹中并不存在 1 这个文件，所以需要node服务来支持
 */
const Koa = require("koa");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();

    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });

    server.listen(8001, () => {
        console.log("server is running at http://localhost:3000");
    });
});
