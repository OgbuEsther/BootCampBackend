import mongoose from "mongoose";

interface gearProps {
  name: string;
  price: string;
  status: boolean;
  view: [];
}

interface Igear extends gearProps, mongoose.Document {}

const gearSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  view: {
    type: [],
  },
});

const gearModel = mongoose.model<Igear>("GearCollections", gearSchema);

export default gearModel;
