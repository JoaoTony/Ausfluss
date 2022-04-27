import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #fff;

  padding: 0 16px;

  position: relative;

  align-items: center;
  justify-content: center;
`

export const TabBarIconWrapper = styled.View`
 width: 30px;
 height: 30px;
 background-color: red;
`
export const TabBarIconWrapperIcon = styled.Image`
  width: 20px;
  height: 20px;
`

export const FloatTabBarIconWrapper = styled.View`
 width: 60px;
 height: 60px;
 background-color: #4AD196;

 border-radius: 30px;

 position: absolute;
 top: -30px;

 align-items: center;
 justify-content: center;
`

export const FloatTabBarIcon = styled.Image`
  width: 26px;
  height: 26px;
`
