module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/email',
            handler: 'email.send',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
