const {Sequelize ,Model ,DataTypes } =require('Sequelize');
const config={
	database:'data1',
	username:'root',
	password:'Zx@12345',
	host:'localhost',
	port:3306
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
}) 

var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    pname: Sequelize.STRING(100),
    // gender: Sequelize.BOOLEAN,
    // birth: Sequelize.STRING(10),
    // createdAt: Sequelize.BIGINT,
    // updatedAt: Sequelize.BIGINT,
    // version: Sequelize.BIGINT
}, {
        timestamps: false
    });


 Pet.findAll({
         where: {
            pname: 'Gaffey'
        }
    }).then((pets)=>{
    	 for (let p of pets) {
        console.log('**',p);
    }
    	 
    });
  