import datadog from '../../datadog'

describe('datadog', async () => {

    test("should list metrics", async() => {
        const metrics = await datadog.getMetrics();
        expect(metrics).toBeInstanceOf(Array);
    })

});