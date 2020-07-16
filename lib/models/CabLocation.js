module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'CabLocation',
        {
            cabId: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                references: 'cabs',
                referencesKey: 'id'
            },
            cabLatitude: {
                field: 'cab_latitude',
                type: DataTypes.FLOAT(11, 10)
            },
            cabLongitude: {
                field: 'cab_longitude',
                type: DataTypes.FLOAT(11, 10)
            }
        },
        {
            tableName: 'cab_locations',
            timestamps: false
        }
    );
};
