const { connect, close, parta, partab, partabc } = require("./main");
describe('Lab 2', () => {
    afterAll(async () => {
        await close();
});

test('Test for Connection', async () => {
    expect(await connect()).toBe(true);
});

test('Test for Part A', async () => {
    const res = await parta();
    expect(res.length).toBe(1);
    expect(res[0]._id.toString()).toBe("5ca4bbcea2dd94ee58162a7e");
});

test('Test for Part A+B', async () => {
    const res = await partab();
    expect(res.length).toBe(1);
    expect(res[0].accounts.length).toBe(4);
    expect(res[0].accounts[0]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e5");
    expect(res[0].accounts[1]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e3");
    expect(res[0].accounts[2]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e4");
    expect(res[0].accounts[3]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e6");
});

test('Test for Part A+B+C', async () => {
    const res = await partabc();
    expect(res.length).toBe(1);
    expect(res[0].accounts.length).toBe(3);
    expect(res[0].accounts[0]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e4");
    expect(res[0].accounts[1]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e5");
    expect(res[0].accounts[2]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e6");
});

});