import dotenv from 'dotenv';
dotenv.config();
import { getData } from './src/zerosheets.js';
import { sendMessage } from './src/discord.js';
import { reformat_time } from './src/pre-process-data.js';

const endpoint_dict = {
    birthday: ["https://api.zerosheets.com/v1/il8", process.env.BIRTHDAY_TOKEN],
    anniversary: ["https://api.zerosheets.com/v1/byj", process.env.ANNIVERSIRY_TOKEN]
};

function main() {
    console.log("set up environment variables and config");
    Object.entries(endpoint_dict).map(mapping => {
        let key = mapping[0];
        const [endpoint, token] = mapping[1];
        getData(endpoint, token)
            .then(data => {
                console.log(`number of records pulled in: ${data.length}`);
                console.log(`data has been pulled in. beginning checks for any ${key} today`);
                //iterate through the data and identify and matching birthdays to today
                let counter = 0;
                for (const entry of data) {
                    if (reformat_time(entry) == true) {
                        sendMessage(entry, process.env.DISCORD_WEBHOOK);
                        counter ++;
                    };
                };
                if (counter == 0) {
                    console.log("no special days unfortunately")
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });
}

main();

