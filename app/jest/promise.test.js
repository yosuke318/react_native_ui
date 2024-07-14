function fetchData() {
    // ここでは非同期処理としてPromiseを使用します
    return new Promise((resolve, reject) => {
        // ここでデータを取得する偽の非同期処理を行います
        setTimeout(() => {
            const data = 'peanut butter'; // データを準備します
            resolve(data); // データを解決して返します
        }, 1000); // 1秒後にデータを返します（非同期をシミュレート）
    });
}

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

