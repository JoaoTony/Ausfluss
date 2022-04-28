import { TouchableOpacityProps } from 'react-native'

export interface ApplicantsProps extends TouchableOpacityProps {
  name: string;
  photo_url: any;
  message: string;
  id: number | string;
}
