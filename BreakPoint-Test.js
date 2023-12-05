import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  // Key configurations for breakpoint in this section
  executor: 'ramping-arrival-rate', //Assure load increase if the system slows
  startRate: 1,
  timeUnit: '1s',
  preAllocatedVUs: 200,
  stages: [
    { duration: '10m', target: 1000 }, // just slowly ramp-up to a HUGE load
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
