'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
        Promise.all([
            queryInterface.createTable('users', {
                id: {
                    type: Sequelize.INTEGER(11),
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                firstName: {
                    field: 'first_name',
                    type: Sequelize.STRING(32),
                    allowNull: false
                },
                lastName: {
                    field: 'last_name',
                    type: Sequelize.STRING(32),
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING(32),
                    allowNull: false
                },
                createdAt: Sequelize.DATE,
                modifiedAt: Sequelize.DATE
            }),

            queryInterface.createTable('cabs', {
                id: {
                    type: Sequelize.INTEGER(11),
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                cabCode: {
                    field: 'cab_code',
                    type: Sequelize.STRING(32),
                    allowNull: false
                },
                driverName: {
                    field: 'driver_name',
                    type: Sequelize.STRING(32),
                    allowNull: false
                },
                createdAt: Sequelize.DATE,
                modifiedAt: Sequelize.DATE
            }),

            queryInterface.createTable('cab_locations', {
                cabId: {
                    type: Sequelize.INTEGER(11),
                    allowNull: false,
                    primaryKey: true,
                    references: {
                        model: 'cabs',
                        key: 'id'
                    }
                },
                cabLatitude: {
                    field: 'cab_latitude',
                    type: Sequelize.FLOAT(11, 10)
                },
                cabLongitude: {
                    field: 'cab_longitude',
                    type: Sequelize.FLOAT(11, 10)
                },
                createdAt: Sequelize.DATE,
                modifiedAt: Sequelize.DATE
            }),

            queryInterface.createTable('bookings', {
                id: {
                    type: Sequelize.INTEGER(11),
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                userId: {
                    field: 'user_id',
                    type: Sequelize.INTEGER(11),
                    references: {
                        model: 'users',
                        key: 'id'
                    }
                },
                cabId: {
                    field: 'cab_id',
                    type: Sequelize.INTEGER(11),
                    references: {
                        model: 'cabs',
                        key: 'id'
                    }
                },
                sourceLatitude: {
                    field: 'source_latitude',
                    type: Sequelize.FLOAT(11, 10)
                },
                sourceLongitude: {
                    field: 'source_latitude',
                    type: Sequelize.FLOAT(11, 10)
                },
                destinationLatitude: {
                    field: 'destination_latitude',
                    type: Sequelize.FLOAT(11, 10)
                },
                destinationLongitude: {
                    field: 'destination_latitude',
                    type: Sequelize.FLOAT(11, 10)
                },
                startTime: {
                    field: 'start_time',
                    type: Sequelize.DATE
                },
                endTime: {
                    field: 'end_time',
                    type: Sequelize.DATE
                },
                createdAt: Sequelize.DATE,
                modifiedAt: Sequelize.DATE
            })
        ]),

    down: (queryInterface, Sequelize) =>
        Promise.all([
            queryInterface.dropTable('users'),
            queryInterface.dropTable('cabs'),
            queryInterface.dropTable('cab_locations'),
            queryInterface.dropTable('bookings')
        ])
};
