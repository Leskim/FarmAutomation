#define BLYNK_TEMPLATE_ID "TMPLyN1ItDNO"
#define BLYNK_DEVICE_NAME "Lesley"
#define BLYNK_AUTH_TOKEN "4dfegjLPVe7OUJfy26I-v1YEKczR-LUU"

#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
 
 const int Soil=A0;
 
#include <DHT.h>

char auth[] = BLYNK_AUTH_TOKEN;

char ssid[] = "Saul254";  // type your wifi name
char pass[] = "Leskim12";  // type your wifi password

#define DHTPIN 2          // Mention the digital pin where you connected 
#define DHTTYPE DHT11     // DHT 11  
DHT dht(DHTPIN, DHTTYPE);
BlynkTimer timer;

void sendSensor(){
  int moisture= analogRead(Soil);
  float h = dht.readHumidity();
  float t = dht.readTemperature(); // or dht.readTemperature(true) for Fahrenheit
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
    if (moisture > 600)
{
  digitalWrite(D2,HIGH);
  }
else
{
  digitalWrite(D2,LOW);
  }

  Serial.println(t);
  Blynk.virtualWrite(V7, moisture);
  Blynk.virtualWrite(V4, h);
  Blynk.virtualWrite(V5, t);
    Serial.print("Temperature : ");
    Serial.println(t);
    Serial.print("    Humidity : ");
    Serial.println(h);
Serial.print("    Moisture : ");
    Serial.println(moisture);

  if(t > 30){
   // Blynk.email("shameer50@gmail.com", "Alert", "Temperature over 28C!");
    Blynk.logEvent("temp_alert","Temp above 30 degree");
  }
}

BLYNK_WRITE(V6)
{
  int Value = param.asInt(); // parameter as int 
  if(Value == HIGH)
  {    
    digitalWrite(D2,HIGH);
    delay(10);
    }  
    if(Value == LOW)
  {
    digitalWrite(D2,LOW);
    delay(10);
    } 

   
}



void setup(){
   Serial.begin(9600);
  Blynk.begin(auth, ssid, pass);
   pinMode(D2,OUTPUT);
  dht.begin();
  timer.setInterval(2500L, sendSensor);
}

void loop(){
  Blynk.run();
  timer.run();
}
