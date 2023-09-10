function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // エラーメッセージに必ず含まれる文字列、または正規表現も使用できます。
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);

    // あるいは、以下のような正規表現を使って、エラーメッセージを正確にマッチさせることもできます。
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});