const assert = require('assert');

// assert(true);
// assert(1);
// // assert(false);
// assert(0);
// assert(false, 'bu shi zhen zhi');

const obj1 = {
    a: {
        b: 1
    }
};

const obj2 = {
    a: {
        b: 2
    }
};

const obj3 = {
    a: {
        b: '1'
    }
}

// const obj4 = Object.create(obj1);

// assert.deepEqual(obj1, obj1);
// assert.deepEqual(obj1, obj2, 'bu tong guo');
// assert.deepEqual(obj1, obj3);
// assert.deepEqual(obj1, obj4);

// assert.deepStrictEqual(obj1, obj3);
// assert.doesNotThrow(
//     () => {
//         throw new TypeError('error');
//     },
//     SyntaxError
// );
// assert.doesNotThrow(
//     () => {
//         throw new TypeError('error');
//     },
//     TypeError,
//     '123'
// )
// assert.equal(1, '1');
// assert.equal(1, 2);
// assert.equal({
//     a: { b: { c: 2 } }
// }, {
//     a: { b: { c: 3 } }
// });
// assert.fail(1, 2, undefined, '<');
// assert.ifError(0);
// assert.ifError(1);
// assert.ifError('error');
// assert.ifError(new Error());
// assert.notEqual(1, 1);
// assert.notEqual(1, '1');
// assert.notStrictEqual(1, 2);
// assert.notStrictEqual(1, 1);
// assert.ok(true);
// assert.ok(1);
// assert.ok(false);
// assert.strictEqual(1, 1);
// assert.strictEqual(1, '1');
// assert.throws(
//     () => {
//         throw new Error('error');
//     },
//     Error
// );
assert.throws(
    () => {
        throw new TypeError('error');
    },
    /error/
)
