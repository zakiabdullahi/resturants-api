const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    findByOwner,
    add,
    remove,
    update
};

function find() {
    let rows = db('owners');
    return rows;
}

function findById(id) {
    return db('owners')
        .where({ id })
        .first();
}

function findByOwner(owner_id) {
    return db('owners')
        .where({ owner_id });
}

async function add(owner) {
    const [id] = await db('owners').insert(owner);
    return findById(id);
}

function remove(id) {
    return db('owners')
        .where({ id })
        .del();
}
function update(id, changes) {
    return db('owners"')
        .where({ id })
        .update(changes, '*');
}