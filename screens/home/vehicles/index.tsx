/* eslint-disable no-unused-vars */
import { useNavigation, useRoute } from '@react-navigation/native'
import { FC, useState, useEffect } from 'react'

import { Dimensions, Alert, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Input from '../../../components/input'
import Button from '../../../components/button'
import useSwr from 'swr'

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
  VehicleStatus,
  AddVehicleButton,
  AddVehicleButtonIcon,
  AddVehicleContainer,
  AddVehicleContent,
  ButtonClose,
  ButtonCloseIcon,
  AddVehicleContentForm
} from './vehicle.styles'
import { postFetcher } from '../../../services/fetcher'

const { width, height } = Dimensions.get('screen')

interface VehicleProps {
  brand: string;
  max_weight_limit: number;
  status: string;
  document: string;
  plate: string;
  owner?: number;
  id: number;
}

const Vehicles: FC = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const [showAdd, setShowAdd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [owner, setOwner] = useState('')

  const [values, setValues] = useState({
    brand: '',
    max_weight_limit: 0,
    status: '',
    document: '',
    plate: ''
  })

  const createVehicle = async () => {
    setLoading(true)
    const { data, status } = await postFetcher('/api/v1/vehicles', values)

    setLoading(false)

    if (status === 201) {
      Alert.alert('', 'Veiculo criado com sucesso')
      setShowAdd(false)
    } else {
      Alert.alert('', 'Alguma coisa deu errodo, tente novamente mais tarde')
    }
  }

  const { data, error } = useSwr<VehicleProps[]>(`/api/v1/vehicles?owner=${owner}`)

  useEffect(() => {
    (
      async () => {
        const authValue = await AsyncStorage.getItem('AusflussAuth')
        setOwner(JSON.parse(authValue || '').id)
      }
    )()
    return setLoading(false)
  }, [])

  return (
    <Container>

      {showAdd && (
        <AddVehicleContainer>
          <AddVehicleContent>
            <ButtonClose onPress={() => setShowAdd(false)}>
              <ButtonCloseIcon source={require('../../../assets/icon-close.png')}/>
            </ButtonClose>

            <AddVehicleContentForm>
            <Input
              style={{ marginBottom: 10 }}
              placeholder="Digite a marca do carro"
              width={(width - 64).toString()}
              onChangeText={(e) => setValues(prev => ({ ...prev, brand: e }))}
            />
            <Input
               style={{ marginBottom: 10 }}
              placeholder="Digete o peso maximo suportado"
              width={(width - 64).toString()}
              keyboardType="numeric"
              onChangeText={(e) => setValues(prev => ({ ...prev, max_weight_limit: Number(e) }))}
            />
            <Input
              style={{ marginBottom: 10 }}
              placeholder="Digete o estado de conservação"
              width={(width - 64).toString()}
              onChangeText={(e) => setValues(prev => ({ ...prev, status: e }))}
            />
            <Input
              style={{ marginBottom: 10 }}
              placeholder="Digete o código da carta de condução"
              width={(width - 64).toString()}
              onChangeText={(e) => setValues(prev => ({ ...prev, document: e }))}
            />
            <Input
              style={{ marginBottom: 10 }}
              placeholder="Digete o numero da plca"
              width={(width - 64).toString()}
              onChangeText={(e) => setValues(prev => ({ ...prev, plate: e }))}
            />

            <Button
              width={(width - 64).toString()}
              onPress={() => createVehicle()}
              text="Adicionar veiculo"
              loading={loading}
            />
            </AddVehicleContentForm>
          </AddVehicleContent>
        </AddVehicleContainer>
      )}
      <CustomHeader>
        <GoBackButton onPress={() => navigation.goBack()}>
          <GoBackIcon source={require('../../../assets/back-icon.png')}/>
        </GoBackButton>

        <Title>Lista de Veiculos</Title>

        <AddVehicleButton onPress={() => setShowAdd(true)}>
          <AddVehicleButtonIcon source={require('../../../assets/icons-add.png')}/>
        </AddVehicleButton>
      </CustomHeader>

      {data && (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 40 }}
          renderItem={({ item }) => (
            <Vehicle>
              <VehicleHeader>
              <VehicleTitle>{item.brand}</VehicleTitle>
              <VehicleWeight>{item.max_weight_limit}kg</VehicleWeight>
              </VehicleHeader>

              <VehicleStatus>{item.status}</VehicleStatus>
            </Vehicle>
          )}
        />
      )}

    </Container>
  )
}

export default Vehicles
