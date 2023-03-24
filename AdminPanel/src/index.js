import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhlWFpAaV5LQmFJfFBmRGJTelZ6dV1WACFaRnZdQV1gS3pSd0ZmWnlXd3BX;Mgo+DSMBPh8sVXJ0S0J+XE9BclRGQmJAYVF2R2BJfl96cV1MYVRBJAtUQF1hSn5QdEFiWHxbc3JcTmhe;ORg4AjUWIQA/Gnt2VVhkQlFac1tJWXxId0x0RWFab19xflBOal1ZVBYiSV9jS31TdUdnWH5ddXdSRmdbUw==;MTQ1MzUxN0AzMjMwMmUzNDJlMzBlcmZaandOcUdzNDZ2K2lMNlZzTjFoVER5Z3hvdVVnd2h1cEx1N0I3RzhRPQ==;MTQ1MzUxOEAzMjMwMmUzNDJlMzBJclZSSnZGWXQ3MUtMY2lYQW1pWVA2RUNGOG9yaXdOaGZIcHIvVEI5a0lBPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpGVmdWf1ppR2NbfE5xdV9DaFZQTGY/P1ZhSXxQdkZhXX5fc3FWQWFYVEY=;MTQ1MzUyMEAzMjMwMmUzNDJlMzBsSncxUkNZRnFUVEUycmVVT2JlRThWUjFWeHErM3hDU2JBQVFyWUEyYmJZPQ==;MTQ1MzUyMUAzMjMwMmUzNDJlMzBYbk1Sa25XNWw2MmdCNmpVRlRMUndhOTc3WitXdmE0TjU1V1VMTFZZelVnPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac1tJWXxId0x0RWFab19xflBOal1ZVBYiSV9jS31TdUdnWH5ddXdSRGFUUw==;MTQ1MzUyM0AzMjMwMmUzNDJlMzBQRGFMeVNEb04wWmplVmpOTi9ZZTBDa09rY0hBdHJVd25IalhJTU5yUGJJPQ==;MTQ1MzUyNEAzMjMwMmUzNDJlMzBYamJXN2pRbnN5VHVpVXhXaDYwUFVJK3BNVXRkdTNCVTdmVXRqbE1QNEhRPQ==;MTQ1MzUyNUAzMjMwMmUzNDJlMzBsSncxUkNZRnFUVEUycmVVT2JlRThWUjFWeHErM3hDU2JBQVFyWUEyYmJZPQ==');
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
