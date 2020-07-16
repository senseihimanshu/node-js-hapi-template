module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'Cab',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            cabCode: {
                field: 'cab_code',
                type: DataTypes.STRING(32),
                allowNull: false
            },
            driverName: {
                field: 'driver_name',
                type: DataTypes.STRING(32),
                allowNull: false
            }
        },
        {
            tableName: 'cabs',
            timestamps: false
        }
    );
};
