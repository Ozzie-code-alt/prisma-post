// create a wrapper insdie the prisma client 

const { PrismaClient } = require('@prisma/client')

let prisma 

// implemented singleton pattern to avoid multiple instances of prisma client
if(process.env.NODE_ENV === 'development') {
  prisma = new PrismaClient()
}else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

module.exports = prisma 