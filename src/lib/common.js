const constantCode = require('./constant');
const { formatError, validationError } = require('./helper')

function withCURDoperation({ primaryKeyField = 'id' } = {}) {
    return model => {
        const deleteById = ({ params = {}, id, primaryKey = primaryKeyField }) => {
            const whereQuery = {}
            whereQuery[primaryKey] = id
            whereQuery['is_deleted'] = 0
            const updateQuery = params || { deleted_at: new Date(), is_deleted: 1, deleted_by: 1 }

            return model.update(updateQuery, {
                where: whereQuery,
            }).then(results => {
                return {
                    message: "Successfully delete the record",
                };
            });
        };
        const updateRecord = ({ params, id }) => {
            const whereQuery = {}
            whereQuery['id'] = id
            return model.update(params, {
                where: whereQuery,
            }).then(results => {
                return {
                    message: "Successfully update the record",
                };
            });
        };
        const getDataById = async ({ where = {}, include = [] }) => {
            try {

                
                const results = model.findOne({
                    where: where,
                    include: include
                })
                return { data: results };

            } catch (error) {
                let err = [{ fieldName: constantCode.INTERNAL_SERVER_ERROR, message: error.message }];
                return validationError(err);

            }

        };
        const getDataByIds = async ({ where = {}, include = [] }) => {
            try {
                const results = await model.findAll({
                    where: where,
                    include: include
                })
              
                return { data: results };

            } catch (error) {
                let err = [{ fieldName: constantCode.INTERNAL_SERVER_ERROR, message: error.message }];
                return validationError(err);

            }


        };
        const pagination = async ({ where = {}, include = [], page, limit, order = ['id', 'desc'] }) => {
            try {
                
                const offset = (page - 1) * limit;
                const results = await model.findAndCountAll({
                    where: where,
                    include: include,
                    offset: offset,
                    limit: limit,
                    order: [order]
                })
               
                const totalPage = Math.ceil(results.count / limit);
                return { data: results.rows, page: page, limit: limit, totalPage: totalPage };
            }
            catch (error) {
                let err = [{ fieldName: constantCode.INTERNAL_SERVER_ERROR, message: error.message }];
                return validationError(err);
            }
        };
        model['deleteById'] = deleteById; // delete
        model['pagination'] = pagination; // find all
        model['updateRecord'] = updateRecord; // update Record
        model['getDataById'] = getDataById;// find one
        model['getDataByIds'] = getDataByIds;// find data for multiple ids
    };

}
module.exports = withCURDoperation;