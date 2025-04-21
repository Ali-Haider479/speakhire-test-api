module.exports = (/* { strapi } */) => {
    return async (ctx, next) => {
        if (ctx.request.path === '/healthz') {
            ctx.send({ status: 'ok' });
        } else {
            await next();
        }
    };
};