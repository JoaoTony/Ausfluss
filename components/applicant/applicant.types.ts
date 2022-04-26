import { TouchableOpacityProps } from 'react-native'

export interface ApplicantsProps extends TouchableOpacityProps {
  name: string;
  avatar: any;
  message: string;
  time: string;
}
