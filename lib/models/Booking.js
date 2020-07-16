module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'Booking',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                field: 'user_id',
                type: DataTypes.INTEGER(11),
                references: 'users',
                referencesKey: 'id'
            },
            cabId: {
                field: 'cab_id',
                type: DataTypes.INTEGER(11),
                references: 'cabs',
                referencesKey: 'id'
            },
            sourceLatitude: {
                field: 'source_latitude',
                type: DataTypes.FLOAT(11, 10)
            },
            sourceLongitude: {
                field: 'source_latitude',
                type: DataTypes.FLOAT(11, 10)
            },
            destinationLatitude: {
                field: 'destination_latitude',
                type: DataTypes.FLOAT(11, 10)
            },
            destinationLongitude: {
                field: 'destination_latitude',
                type: DataTypes.FLOAT(11, 10)
            },
            startTime: {
                field: 'start_time',
                type: DataTypes.DATE
            },
            endTime: {
                field: 'end_time',
                type: DataTypes.DATE
            }
        },
        {
            tableName: 'bookings',
            timestamps: false
        }
    );
};
