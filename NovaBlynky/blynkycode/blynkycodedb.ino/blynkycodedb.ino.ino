

#define BLYNK_TEMPLATE_ID "TMPLyN1ItDNO"
#define BLYNK_DEVICE_NAME "Lesley"
#define BLYNK_AUTH_TOKEN "4dfegjLPVe7OUJfy26I-v1YEKczR-LUU"

#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

//To help connect to db
#include <ESP8266HTTPClient.h>
#include <Wire.h>
//#include <WiFi.h>
#include <WiFiClient.h>

WiFiClient wifiClient;

 
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


//  Connect to db
String sendtemp, sendhum, sendsoil, postData;
HTTPClient http; // http object of class HTTPClient
// Convert to float
  sendtemp = t;
  sendhum = h;
  sendsoil = float(moisture); 
  postData = "sendtemp=" + sendtemp + "&sendhum=" + sendhum + "&sendsoil" + sendsoil;

  // We can post values to PHP files as  example.com/dbwrite.php?name1=val1&name2=val2
  // Hence created variable postData and stored our variables in it in desired format
  // Update Host URL here:-
  http.begin( wifiClient, "http://192.168.0.18/fourthyearProj/farmsens.php");  // Connect to host where MySQL database is hosted
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");  //Specify content-type header
  int httpCode = http.POST(postData);   // Send POST request to php file and store server response code in variable named httpCode
  Serial.println("Values are, sendtemp = " + sendtemp + ", sendhum " + sendhum +  " and sendsoil = "+sendsoil );
  // if connection eatablished then do this
  if (httpCode == 200) { Serial.println("Values uploaded successfully."); Serial.println(httpCode);
    String webpage = http.getString();  // Get html webpage output and store it in a string
    Serial.println(webpage + "\n");
  } else {
    // if failed to connect then return and restart
    Serial.println(httpCode);
    Serial.println("Failed to upload values. \n");
    http.end();

//Connect to Database


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
  WiFi.begin();
  WiFi.mode(WIFI_AP);
 WiFi.softAP("Saul254", "Leskim12");
 while (WiFi.softAPgetStationNum() !=1){ //loop here while no AP is connected to this station
      Serial.print(".");
      delay(100);                           
      }
}



void loop(){
  Blynk.run();
  timer.run();
}
