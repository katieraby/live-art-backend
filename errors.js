const customErrorHandler = (err, req, res, next) => {
  //console.log(err);
  if (err.status !== undefined) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};

const mongoErrorHandling = (err, req, res, next) => {
  if (err.code !== undefined) {
    const mongoErrors = {
      11000: {
        status: 400,
        msg: "Username already exists!",
      },
    };
    res
      .status(mongoErrors[err.code].status)
      .send({ msg: mongoErrors[err.code].msg });
  } else next(err);
};

const serverErrorHandler = (err, req, res, next) => {
  res.status(500).send({ msg: "Internal server error" });
};

const send405Error = (req, res, next) => {
  res.status(405).send({ msg: "Method not allowed" });
};

module.exports = {
  customErrorHandler,
  mongoErrorHandling,
  serverErrorHandler,
  send405Error,
};
