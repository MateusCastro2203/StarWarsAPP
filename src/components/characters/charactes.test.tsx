import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import CharactersTitle from './Characters'; // Ajuste o caminho de importação conforme necessário

describe('CharactersTitle', () => {
  test('snapshot', () => {
    const tree = render(
      <CharactersTitle text="Test Character" onPress={() => {}} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('deve renderizar o texto fornecido', () => {
    const {getByText} = render(
      <CharactersTitle text="Test Character" onPress={() => {}} />,
    );
    expect(getByText('Test Character')).toBeTruthy();
  });

  test('deve chamar onPress quando pressionado', () => {
    const onPressMock = jest.fn();
    const screen = render(
      <CharactersTitle text="Test Character" onPress={onPressMock} />,
    );
    fireEvent.press(screen.getByText('Test Character'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
