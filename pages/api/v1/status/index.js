function status(req, res) {
  res.status(200).json({
    chave: "lorem ipsum áéíóú",
  });
}

export default status;
