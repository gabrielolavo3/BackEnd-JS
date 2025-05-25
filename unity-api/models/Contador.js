import mongoose from 'mongoose';

const contadorSchema = new mongoose.Schema({
  _id: String,
  sequencia: { type: Number, default: 0 },
}, { timestamps: true });

const Contador = mongoose.model('Contador', contadorSchema);
export default Contador;
