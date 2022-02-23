//Soil Moisture Pin 
int soilMoisturePin = A0;

int moistureOutput;
void setup() {
//  Set pump pin as output
  pinMode(4, OUTPUT);
//  Begin serial monitor
  Serial.begin(9600);
  Serial.println("Readings from the soil moisture sensor ...");
//  Set delay 
  delay(2000);
}

void loop() {
//Get readings and map them out
  moistureOutput = analogRead(soilMoisturePin);
  moistureOutput = map(moistureOutput, 550, 10, 0, 100);
 Serial.print("Moisture : ");
 Serial.print(moistureOutput);
 Serial.println("%");

// Logic to pump water into soil 
  if(moistureOutput < 0){
//    start pump
    digitalWrite(4, HIGH);
  }else{
    digitalWrite(4, LOW);
  }
  delay(1000);
}
