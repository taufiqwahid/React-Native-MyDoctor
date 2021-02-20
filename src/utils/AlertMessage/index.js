import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const alertMessage = ({message, type, icon, background}) => {
  type === 'success' ? (background = colors.message.success) : null;
  type === 'danger' ? (background = colors.message.danger) : null;
  type === 'info' ? (background = colors.message.info) : null;
  showMessage({
    message: message,
    type: type,
    icon: icon ? icon : 'danger',
    color: 'white',
    backgroundColor: background ? background : colors.message.danger,
  });
};
