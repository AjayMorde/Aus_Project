module.exports = {
  create: async (req, res) => {
    res.status(201).json({ message: 'time interval created' });
  },
};
