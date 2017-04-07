// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(10, 1);

// const buf3 = Buffer.allocUnsafe(10);
// const buf4 = Buffer.from([1, 2, 3]);
// console.log(buf4);
// const buf5 = Buffer.from('test');
// const buf6 = Buffer.from('test', 'utf8');
// // console.log(buf6);
// const buf7 = Buffer.from('hello world');
// console.log(buf7.toString('ascii'));
// console.log(buf7.toString('base64'));
// console.log(buf7);
// const arrayBuf = new Uint8Array(10);
// console.log(arrayBuf);
// console.log(arrayBuf.buffer);
// arrayBuf[0] = 10;
// console.log(arrayBuf);
// console.log(arrayBuf.buffer);
// const arr = new Uint16Array(2);
// arr[0] = 5000;
// arr[1] = 4000;
// const buf1 = Buffer.from(arr);
// const buf2 = Buffer.from(arr.buffer);

// console.log(buf1);
// console.log(buf2);
// arr[1] = 6000;

// console.log(buf1);
// console.log(buf2);
// const arr = new Uint16Array(20);
// const buf = Buffer.from(arr.buffer, 0, 16);
// console.log(buf.length);
// const buf = Buffer.from([1, 2, 3]);
// for (const b of buf) {
//     console.log(b);
// }
// const buf = Buffer.alloc(11, 'aGVsbG8d29ybGQ=', 'base64');
// console.log(buf);
// console.log(buf.kMaxLength);
// const buf = Buffer.allocUnsafe(10);
// console.log(buf);
// buf.fill(0);
// console.log(Buffer.poolSize);
// const store = [];
// socket.on('readable', () => {
//     const data = socket.read();

//     const sb = Buffer.allocUnsafeSlow(10);
//     data.copy(sb, 0, 0, 10);

//     store.push(sb);
// });
// const str = '\u00bd+\u00bc=\u00be'; 
// console.log(`${str}: ${str.length} ge zi fu, ` + `${Buffer.byteLength(str, 'utf8')} ge zi jie`);
// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(14);
// const buf3 = Buffer.alloc(18);
// const totalLength = buf1.length + buf2.length + buf3.length;
// const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);
// console.log(bufA);
// console.log(bufA.length);
// const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
// const arr = new Uint16Array(2);
// arr[0] = 5000;
// arr[1] = 4000;
// const buf = Buffer.from(arr.buffer);
// console.log(buf);
// arr[1] = 6000;
// console.log(buf);
// const buf1 = Buffer.from('buffer');
// const buf2 = Buffer.from(buf1);
// buf1[0] = 0x61;
// console.log(buf1.toString());
// console.log(buf2.toString());
// const str = 'Node.js';
// const buf = Buffer.allocUnsafe(str.length);
// for (let i = 0; i < str.length; i++) {
//     buf[i] = str.charCodeAt(i);
// }
// console.log(buf.toString('ascii'));
// const buf1 = Buffer.from('ABC');
// const buf2 = Buffer.from('BCD');
// const buf3 = Buffer.from('ABCD');

// console.log(buf1.compare(buf1));
// console.log(buf1.compare(buf2));
// console.log(buf1.compare(buf3));
// const buf1 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// const buf2 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);
// console.log(buf1.compare(buf2, 5, 9, 0, 4));
// const buf1 = Buffer.allocUnsafe(26);
// const buf2 = Buffer.allocUnsafe(26).fill('!');
// for (let i = 0; i < 26; i++) {
//     buf1[i] = i + 97;
// }
// buf1.copy(buf2, 8, 16, 20);
// console.log(buf2.toString('ascii', 0, 25));
// const buf = Buffer.allocUnsafe(26);
// for (let i = 0; i < 26; i++) {
//     buf[i] = i + 97;
// }
// buf.copy(buf, 0, 4, 10);
// console.log(buf.toString());
// for (const pair of buf.entries()) {
//     console.log(pair);
// }
// console.log(Buffer.allocUnsafe(3).fill('\u0222'));
// const buf = Buffer.from('this is a buffer');
// console.log(buf.indexOf('this'));
// console.log(buf.indexOf(Buffer.from('a buffer')));
// console.log(buf.indexOf(97));
// console.log(buf.indexOf(Buffer.from('a buffer example')));
// console.log(buf.indexOf(Buffer.from('a buffer example').slice(0, 8)));
// const utf16Buffer = Buffer.from('')
// const b = Buffer.from('abcdef');
// console.log(b.indexOf(99.9));
// console.log(b.indexOf(256 + 99));
// console.log(b.indexOf('b', {}));
// const buf = Buffer.from('this is a buffer');
// console.log(buf.includes('this'));
// console.log(buf.includes('is'));
// console.log(buf.includes(Buffer.from('a buffer')));
// console.log(buf.includes(97));
// const buf = Buffer.from('buffer');
// for (const key of buf.keys()) {
//     console.log(key);
// }
// let buf = Buffer.allocUnsafe(10);
// buf.write('abcdefghj', 0, 'ascii');
// console.log(buf.length);
// buf = buf.slice(0, 5);
// console.log(buf.length);
// const buf = Buffer.from([0, 0, 0, 0, 0, 0, 0, 8]);
// console.log(buf.readDoubleBE());
// console.log(buf.readDoubleLE());
// console.log(buf.readDoubleLE(1));
// const buf = Buffer.from([0, 5]);
// console.log(buf.readInt16BE());
// console.log(buf.readInt16LE());
// const buf1 = Buffer.allocUnsafe(26);
// for (let i = 0; i < 26; i++) {
//     buf1[i] = i + 97;
// }
// const buf2 = buf1.slice(0, 3);
// console.log(buf2.toString('ascii', 0, buf2.length));
// buf1[0] = 33;
// console.log(buf2.toString('ascii', 0, buf2.length));
// const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
// console.log(buf1);
// buf1.swap16();
// console.log(buf1);
// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);

// console.log(json);
// const copy = JSON.parse(json. (key, value) => {
//     return value && value.type === 'Buffer'
//         ? Buffer.from(value.data)
//         : value;
// });

// console.log(copy);
const buf = Buffer.from('buffer');
for (const value of buf.values()) {
    console.log(value);
}
