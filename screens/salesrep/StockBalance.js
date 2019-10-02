import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Segment,
  Content,
  Text,
  Tabs,
  Tab,
  CardItem,
  Card,
} from 'native-base';
export default class StockBalanceScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem>
              <Text>Stock Balance1</Text>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Text>Stock Balance2</Text>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Text>Stock Balance3</Text>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Text>Stock Balance4</Text>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Text>Stock Balance5</Text>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Text>Stock Balance6</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = (StyleSheet.stockBalance = {
  container: {
    flex: 1,
    backgroundColor: '#2bbbad',
  },
});
