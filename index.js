import sensors from "./src/sensors";
export { setUpdateInterval as setUpdateIntervalForType } from "./src/rnsensors";

export const SensorTypes = {
  accelerometer: "accelerometer",
  gyroscope: "gyroscope",
  magnetometer: "magnetometer",
  barometer: "barometer",
  temperature: "temperature"
};

export const { accelerometer, gyroscope, magnetometer, barometer, temperature } = sensors;
export default sensors;
