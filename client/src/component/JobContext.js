import { createContext } from 'react';

import React from 'react';

// export const JobContext = createContext();
export const ThemeContext = createContext("slate");

const JobContext = React.createContext();

export default JobContext;
