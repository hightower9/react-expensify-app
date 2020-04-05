const moment = require.requireActual('moment'); //this is used to mock out a given library 
//instead of using import moment from 'moment';

export default (timestamp = 0) => {
    return moment(timestamp);
};