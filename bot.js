const schedule = require('node-schedule');
const { getPrayerTimes } = require('./services/prayerTimeService');
const { sendMessage } = require('./controllers/messageController');

async function schedulePrayerNotifications() {
    const prayerTimes = await getPrayerTimes();

    // console.log(prayerTimes);


    // if (!prayerTimes) return;

    // const fajrTime = prayerTimes.find(prayer => prayer.name === 'Fajr').time;
    schedule.scheduleJob('44 16 * * *', function () {
        console.log("Job scheduled");

        // sendMessage('DSB6p8TvGtSBqZLYKwjqod', 'Test message from botabot v.1.0.0');
    });
}

schedulePrayerNotifications();