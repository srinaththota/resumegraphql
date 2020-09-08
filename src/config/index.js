module.exports = {
    server: {
        host:'localhost',
        port:process.env.PORT || 3000
    },
    database:{
        url:'mongodb+srv://srinaththota:abcd1234@cluster0.ouecu.azure.mongodb.net/resume?retryWrites=true&w=majority',
     
        /*                                         
                                        to use sql and sequelize orm
        username:'root',
        name:'DEVELOPMENT', 
        password:'root',
        options: {  
            host: 'localhost',
            port: 3306,
            dialect: 'mysql',
            freezeTableName: true,
            define: {
                timestamps: false
            },
            pool: {
                max: 9,
                min: 0,
                idle: 10000
            }
        }
    */
    }
};
