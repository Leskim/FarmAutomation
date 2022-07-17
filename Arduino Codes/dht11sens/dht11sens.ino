
//Include sensor library DHTLib `think from adafruit` so as to use the Sensor.read11 property

#include <dht.h>

//Define the sensor pin as 8
#define DHT11_PIN 8 
//Call dht on sensor to use logics
dht Sensor;
void setup() {
//  Set serial monitor
  Serial.begin(9600);
  Serial.println(F("DHT11!"));
}
void loop() {


  Sensor.read11(DHT11_PIN);

//  If not abble to get sensor readings 
  if (isnan(Sensor.humidity) || isnan(Sensor.temperature) || Sensor.humidity < 0 ) {
    Serial.println(F("Failed to read from DHT sensor!"));
    delay (2000);
    return;
  }
//  delay(100);
//Print humidity and temp with 2s delay
  Serial.print("Humidity: ");
  Serial.print(Sensor.humidity);
  Serial.println(" %");
  Serial.print("Temperature: ");
  Serial.print(Sensor.temperature);
  Serial.println(" C");
  delay(2000);


}
