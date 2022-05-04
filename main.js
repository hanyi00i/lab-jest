const { MongoClient, ObjectId } = require('mongodb');
const uri = "put your mongodb uri here";
const client = new MongoClient(uri);
exports.connect = async () => {
try {
await client.connect();
return true;
} catch (err) {
console.log(err);
return false;
}
};
exports.close = async () => {
await client.close();
};
exports.parta = async () => {
// TODO: Implement Part A Aggregation
    return client.db("sample_analytics").collection("customers").aggregate([
        { $match: { name: "Shirley Rodriguez" } }
    ]).toArray()
};
exports.partab = async () => {
// TODO: Implement Part A and B Aggregation
    return client.db("sample_analytics").collection("customers").aggregate([
        { $match: { name: "Shirley Rodriguez" } },
        { $lookup: {
            from: 'accounts',
            localField: 'accounts',
            foreignField: 'account_id',
            as: 'accounts'
        }}
    ]).toArray()
};
exports.partabc = async () => {
// TODO: Implement Part A, B and C Aggregation
    return client.db("sample_analytics").collection("customers").aggregate([
        { $match: { name: "Shirley Rodriguez" } },
        { $lookup: {
            from: 'accounts',
            localField: 'accounts',
            foreignField: 'account_id',
            as: 'accounts'
        }},
        { $unwind: {path:'$accounts' } },
        { $match: { 'accounts.products': {$in: ['InvestmentFund'] } } },
        { $sort: {'accounts._id': 1} },
        { $group: {
            _id: '$_id',
            username: {$first: '$username'},
            name: {$first: '$name'},
            address: {$first: '$address'},
            birthdate: {$first: '$birthdate'},
            accounts: {$push: '$accounts'}
        }}
    ]).toArray()
};
