const axios = require('axios');
const config = require('../config/config');

async function getPrayerTimes() {
    try {
        const response = await axios.get(`${config.apiUrl}`, {
            params: {
                city: 'Baku',
                country: 'Azerbaijan',
                method: 2
            }
        });

        console.log(response);
        
        console.log(response.data.data.timings);
        
        return response.data.data.timings;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        return null;
    }
}

module.exports = {
    getPrayerTimes,
};