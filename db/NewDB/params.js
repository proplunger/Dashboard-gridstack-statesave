const mongoose = require('mongoose');

// connect to the MongoDB database
mongoose.connect('mongodb://your_host:your_port/your_database',
 { useNewUrlParser: true });

// create the parameter schema
const parameterSchema = new mongoose.Schema({
  parameter_name: { type: String, required: true },
  unit: { type: String, required: true }
});

// create the Parameter model
const Parameter = mongoose.model('Parameter', parameterSchema);

// create a new parameter document
const flowRate = new Parameter({ parameter_name: 'Flow Rate', unit: 'm3/hr' });
const tankTemperature = new Parameter({ parameter_name: 'Tank Temperature', unit: '°C' });
const motorCurrent = new Parameter({ parameter_name: 'Motor Current', unit: 'A' });
const motorVoltage = new Parameter({ parameter_name: 'Motor Voltage', unit: 'V' });
const suctionPressure = new Parameter({ parameter_name: 'Suction Pressure', unit: 'bar' });
const tankPressure = new Parameter({ parameter_name: 'Tank Pressure', unit: 'bar' });
const tankLevel = new Parameter({ parameter_name: 'Tank Level', unit: 'm' });

// save the new parameter documents to the database
flowRate.save();
tankTemperature.save();
motorCurrent.save();
motorVoltage.save();
suctionPressure.save();
tankPressure.save();
tankLevel.save();
