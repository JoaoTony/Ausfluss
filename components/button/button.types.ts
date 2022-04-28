import { TouchableOpacityProps } from 'react-native'

export interface ButtonProps extends TouchableOpacityProps {
  width: string;
  text: string;
  loading?: boolean;
}
