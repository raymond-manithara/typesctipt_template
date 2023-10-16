import PinoLogger, {Logger} from 'pino';

const logger:Logger = PinoLogger({
    transport:{
        target: "pino-pretty"
    }
});

export default logger;