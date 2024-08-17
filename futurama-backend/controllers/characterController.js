// controllers/characterController.js
const axios = require('axios');

exports.getAllCharacters = async (req, res) => {
  try {
    const response = await axios.get('https://api.sampleapis.com/futurama/characters');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching characters' });
  }
};

exports.getCharacterById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://api.sampleapis.com/futurama/characters/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching character' });
  }
};
