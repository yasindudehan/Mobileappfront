import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
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
    const a = 100;
    const b = 1000;
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card>
            <Text>TEA POUCH</Text>
            <CardItem>
              <Body>
                <Text> 20g</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text>50g</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a}</Text>
                </ProgressCircle>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>100g</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a}</Text>
                </ProgressCircle>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text> 200g</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text> 400g</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <Text>01KG POUCH</Text>
            <CardItem>
              <Body>
                <Text> Premium Qulality</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text>Export Quality</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a}</Text>
                </ProgressCircle>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text> BOPF Quality</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text>Catering Pack</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <Text>TEA BAG</Text>
            <CardItem>
              <Body>
                <Text> 25 Pack</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text>50 Pack</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text> 100 Pack</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <Text>TEA SACHET</Text>
            <CardItem>
              <Body>
                <Text>250 Bag</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text>500 Bag</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text> 1000 Bag</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <Text>TEA BULK</Text>
            <CardItem>
              <Body>
                <Text> Premium Qulality{'\n'}5kg</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text>Export Quality{'\n'}5kg</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a}</Text>
                </ProgressCircle>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text> Catering Quality{'\n'}5kg</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text>Export Quality{'\n'}25kg</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text> Tea Box{'\n'}25kg</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text>Bag Type{'\n'}50kg</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <Text>TEA BOTTLE</Text>
            <CardItem>
              <Body>
                <Text>250g</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <Text>TEA BASKET RANGE</Text>
            <CardItem>
              <Body>
                <Text> PF-1 4.5g</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
              <Body>
                <Text>BP-1 4.0g</Text>
                <ProgressCircle
                  percent={((b - a) / b) * 100}
                  radius={50}
                  borderWidth={20}
                  color="#05f709"
                  shadowColor="#edf0ed"
                  bgColor="#f2e68d">
                  <Text style={{fontSize: 18}}>{b - a} </Text>
                </ProgressCircle>
              </Body>
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
