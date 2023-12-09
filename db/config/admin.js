module.exports = ({ env }) => ({
  auth: {
    secret: 'senha',
  },
  apiToken: {
    salt: 'senha',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
