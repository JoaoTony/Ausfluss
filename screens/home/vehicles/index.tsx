/* eslint-disable no-unused-vars */
import { useNavigation, useRoute } from '@react-navigation/native'
import { FC } from 'react'

import {
  Container,
  CustomHeader,
  GoBackButton,
  GoBackIcon,
  Title,
  Vehicle,
  VehicleTitle,
  VehicleHeader,
  VehicleWeight,
  VehicleStatus
} from './vehicle.styles'

interface VehicleProps {
  brand: string;
  max_weight_limit: number;
  status: string;
  document: string;
  plate: string;
  owner: number;
  id: number;
}

const Vehicles: FC = () => {
  const route = useRoute()
  const navigation = useNavigation()

  // const { } = route.params as any

  return (
    <Container>
      <CustomHeader>
        <GoBackButton onPress={() => navigation.goBack()}>
          <GoBackIcon source={require('../../../assets/back-icon.png')}/>
        </GoBackButton>

        <Title>Lista de Veiculos</Title>
      </CustomHeader>

      <Vehicle>
        <VehicleHeader>
         <VehicleTitle>Suzuki</VehicleTitle>
         <VehicleWeight>2000kg</VehicleWeight>
        </VehicleHeader>

        <VehicleStatus>Bom estado</VehicleStatus>
      </Vehicle>
    </Container>
  )
}

export default Vehicles
