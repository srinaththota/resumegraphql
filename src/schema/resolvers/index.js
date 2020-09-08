const { mergeResolvers } = require('merge-graphql-schemas');
const Skills = require('./skills');
const Certifications = require('./certifications');

const resolvers = [
    Skills,
    Certifications
]
module.exports = mergeResolvers(resolvers);