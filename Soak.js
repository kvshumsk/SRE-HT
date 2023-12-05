import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  // Key configurations for breakpoint in this section
  executor: 'ramping-arrival-rate', //Assure load increase if the system slows
  startRate: 1,
  timeUnit: '1s',
  preAllocatedVUs: 100,
   stages: [
    { duration: '5m', target: 200 }, // traffic ramp-up from 1 to 200 users over 5 minutes.
    { duration: '1h', target: 200 }, // stay at 200 users for 1 hours!!!
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const headers = { 'Host': 'weather.example.kvshumsk' };
  const urlRes = http.get('http://91.185.85.213/WeatherForecast/', { headers });
  sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};
