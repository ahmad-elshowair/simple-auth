

export const validation = (req, res, next) => {
  const { email, name, password } = req.body;

  const validEmail = (email) => {
    const regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
  }

  if (req.path === '/register') {
    if (![email, name, password].every(Boolean)) {
      return res.status(401).json('missing credentials!');
    } else if (!validEmail(email)) {
      return res.status(401).json('invalid email!');
    }
  } else if (req.path === '/login') {
    if (![email, password].every(Boolean)) {
      return res.status(401).json('missing credentials!');
    } else if (!validEmail(email)) {
      return res.status(401).json('invalid email!');
    }
  }
  next();
};