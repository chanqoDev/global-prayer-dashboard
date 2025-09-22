import mongoose from "mongoose";

const prayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  request: { type: String, required: true },
  dateRaw: { type: String },        // ISO string
  dateFormatted: { type: String },  // es-MX display string
  urgency: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Prayer = mongoose.model("Prayer", prayerSchema);
export default Prayer;
