import { createLogger, format, transports } from 'winston'
import { app } from 'electron'

const logPath = app.getPath('logs') + '/file-generator.log'

const { combine, timestamp, printf, simple } = format

const fileFormat = printf(({ level, message, timestamp }) => {
  const time = new Date(timestamp).toLocaleString()
  return `${time} | ${level}: ${message}`
})

const logger = createLogger({
  transports: [
    new transports.File({
      format: combine(
        timestamp(),
        fileFormat
      ),
      level: 'info',
      filename: logPath
    })
  ]

})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: simple(),
    level: 'silly'
  }))
}

export default logger
