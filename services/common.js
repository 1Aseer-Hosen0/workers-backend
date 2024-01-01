const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTA2YzIxM2NhZjcwNTk2YzYzNmI0OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAzOTYzNjgxfQ.2UoD3Af2YfazQZ_q5RoMGA0sx861XH6QtP8SHDIx_nM"
  return token;
};