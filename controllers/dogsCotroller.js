import DOGS from '../common/constants';


let dogs = DOGS;

exports.getDogs = (req, res) => {
  if (dogs.length <= 0) {
    res.json({ purchases, message: 'No dogs available' });
    return;
  }
  res.json(purchases);
};
