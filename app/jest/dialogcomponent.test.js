import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DialogComponent from "../components/DialogComponent"; // テスト対象のコンポーネントをインポート

test('Button click should render the screen', () => {
    const { getByText } = render(<DialogComponent />); // テスト対象のコンポーネントをレンダリング

    const button = getByText('Show Dialog'); // ボタンを取得

    fireEvent.press(button); // ボタンをクリック

    // 期待される描画要素やメッセージが表示されるかを検証
    expect(getByText('Other Component Dialog')).toBeTruthy();
});
