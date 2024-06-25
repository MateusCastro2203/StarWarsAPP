import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Button from './Button'; // Ajuste o caminho de importação conforme necessário

describe('Button Component', () => {
  const onPressMock = jest.fn();

  test('snapshot', () => {
    const tree = render(
      <Button isFavorite={false} onPress={onPressMock} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('deve exibir "Add to favorites" quando isFavorite é false', () => {
    render(<Button isFavorite={false} onPress={onPressMock} />);
    expect(screen.getByText('Add to favorites')).toBeTruthy();
  });

  test('deve exibir "Remove from favorites" quando isFavorite é true', () => {
    render(<Button isFavorite={true} onPress={onPressMock} />);
    expect(screen.getByText('Remove from favorites')).toBeTruthy();
  });
  test('deve chamar onPress quando o botão é clicado', () => {
    render(<Button isFavorite={false} onPress={onPressMock} />);

    fireEvent.press(screen.getByText('Add to favorites'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
