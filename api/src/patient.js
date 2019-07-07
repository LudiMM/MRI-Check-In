import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Patient = new Schema(
  {
    id: {
      type: Number,
    },
    data: {
      type: JSON,
    },
  },
  {
    collection: 'patients',
  },
);

export default mongoose.model('Patient', Patient);
