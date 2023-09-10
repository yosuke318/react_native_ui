// fetchData.js

async function fetchData() {
    try {
        // ここでデータを非同期に取得する処理を模倣します
        const response = await fetch('peanut butter'); // データの取得は非同期に行われると仮定します
        const data = await response.text(); // レスポンスデータを取得

        return data;
    } catch (error) {
        throw error; // エラーが発生した場合はエラーをスローします
    }
}


test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});