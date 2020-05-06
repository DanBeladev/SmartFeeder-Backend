import DOGS from '../common/constants';


let dogs = DOGS;

exports.getDogs = (req, res) => {
  if (dogs.length <= 0) {
    res.json({ dogs, message: 'No dogs available' });
    return;
  }
  res.json(dogs);
};
