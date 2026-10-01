# Farm Automation

An open-source, small-scale irrigation prototype using soil-moisture and temperature/humidity readings, a Wi-Fi-connected controller, a Blynk dashboard, and a switched water pump. This repo includes Arduino sketches, a web showcase, project photos, dashboard/setup screenshots, and project video files.

## Hardware and costs

The supplied Novatech Inc. Nairobi cart screenshot lists these four items (shipping shown as free):

| Part in supplier screenshot | Quoted price |
| --- | ---: |
| Soil moisture sensor | KSh 150 |
| DHT11 temperature/humidity sensor | KSh 200 |
| ESP32 development board | KSh 750 |
| Mini DC submersible pump | KSh 300 |
| **Quoted total** | **KSh 1,400** |

The product description in the quote names an **ESP32**, while `NovaBlynky/blynkycode/blynkycode.ino` includes ESP8266/NodeMCU libraries. Check the exact board and firmware target before ordering; they are not interchangeable without changing the code. A relay or properly rated transistor/MOSFET driver is also required for pump switching and is not itemized in that cart (rough planning estimate on the showcase: KSh 250).

### Blue Pill and mobile-data alternative

The showcase uses estimated—not supplier-quoted—ranges of KSh 450–700 for a Blue Pill and KSh 850–1,500 for a SIM800L GSM/GPRS module.

- Replacing only the quoted KSh 750 Wi-Fi board with a Blue Pill would bring the four-item total to approximately **KSh 1,100–1,350**, a saving of **KSh 50–300 (about 4–21%)**. The Blue Pill itself has no Wi-Fi or cellular radio.
- Adding a SIM800L as the Blue Pill's network connection changes the estimate to approximately **KSh 1,950–2,850** for the quoted parts plus modem. That is **KSh 550–1,450 more** than the KSh 1,400 cart, before SIM/data, delivery, and a suitable modem power supply. Cellular adds coverage where Wi-Fi is absent; it does not make this build cheaper.
- SIM800L is a 2G GSM/GPRS modem. Check the current local carrier's 2G availability and coverage at the farm. Retarget the ESP8266 Blynk sketch for an STM32 UART and a compatible modem/Blynk library, and provide a regulated supply designed for the module's current bursts.

Alternative component prices shown on the website are rough comparison estimates, not live retailer offers. The named Novatech cart is the source for the KSh 1,400 total.

## Wiring and firmware walkthrough

1. Choose the sketch that matches the experiment. `Arduino Codes/moistureSenswithPump/moistureSenswithPump.ino` is a standalone soil-moisture/pump test; the Blynk sketch in `NovaBlynky/blynkycode/` reads the DHT11 and soil probe and exposes dashboard controls. They are separate sketches, not two files to flash together.
2. For the Blynk/NodeMCU sketch, the current code assigns the analog soil probe to `A0`, the DHT11 data line to GPIO2 (NodeMCU D4), and the pump-driver control to NodeMCU D2 (GPIO4). Confirm the board pinout before wiring and recalibrate the analog moisture threshold in the actual growing medium.
3. Copy `NovaBlynky/blynkycode/secrets.h.example` to `NovaBlynky/blynkycode/secrets.h` locally and replace the placeholders with the Blynk template ID, device name, token, Wi-Fi SSID/password, and setup-hotspot SSID/password. Both Blynk sketches use this private header; the nested sketch includes it from its parent folder. `secrets.h` is ignored by Git. **Keep Wi-Fi names, passwords, and the Blynk token hidden; never paste real values into a public sketch, screenshot, issue, or commit.**
4. In Blynk, create the device/template and datastreams used by the sketch: V4 humidity, V5 temperature, V6 pump switch, and V7 soil reading. Use the Blynk template/device credentials for that device in your local private header.
5. Install the matching ESP8266 board support and the Blynk and DHT libraries in Arduino IDE. Open the appropriate `.ino`, select the correct ESP8266/NodeMCU board and serial port, then compile and upload. Open Serial Monitor at 9600 baud to check readings and refine the moisture threshold before connecting a pump.
6. Keep the pump's motor current off the controller GPIO. Switch it with a relay or correctly rated driver, use a suitable separate pump supply, and follow the pump/driver wiring requirements. Keep a submersible pump underwater while running and protect electronics from splashes.
7. Configure and test the pump control while the system is supervised. Check the relay's active-high/active-low behavior and ensure the automatic threshold and Blynk manual switch cannot leave watering on unattended.

The Blynk sketch's virtual-pin mapping is V4 humidity, V5 temperature, V6 pump control, and V7 soil value. The `NovaBlynky/Screenshots/` folder documents sensor wiring, serial values, dashboard setup, and pump states.

## Viewing the project videos

The repository contains three LFS-tracked Blynk-project clips (about 244.7 MB, 234.9 MB, and 149.6 MB; roughly 629 MB combined). The website's featured clip is `NovaBlynky/VID20220520104322.mp4`, followed by the 10:46 and 10:48 clips. It streams from the GitHub media endpoint with `preload="none"`, so the full clip is not fetched until the visitor presses play. This supports byte-range requests but is not adaptive-bitrate video; playback can still pause on a slow or mobile connection.

For a separate 500 MB+ master video, the easiest smooth-playback option is **YouTube Unlisted**: upload the master, copy its video ID, and embed the YouTube player in the showcase. Unlisted videos are viewable by anyone with the link. YouTube automatically serves playback at suitable resolutions, avoiding a single huge MP4 download for site visitors. If you need a branded, controlled video host, use a managed streaming service such as Cloudflare Stream; it transcodes video and serves adaptive streaming. Keep the original master archived, and do not commit a 500 MB video directly to the site repository. Once you have the YouTube URL or ID, replace the GitHub video source with the corresponding `youtube-nocookie.com/embed/VIDEO_ID` player URL.

## Web showcase

The Next.js website presents the field build, quoted parts, cost comparisons, an automatically advancing/pauseable gallery made from six non-sensitive repository screenshots, and the original video playlist. Representative component-card images are illustrative product images; project photos and Blynk screenshots in the gallery show the actual build and recorded setup.

Run locally with Node.js installed:

```bash
npm install
npm run dev
```

Then open the local development URL printed by Next.js. To create a production build, run `npm run build`.

## Credential rotation notice

Earlier repository commits and a Blynk code screenshot contained real Wi-Fi/Blynk credential strings. The credential-bearing screenshot has been removed from the current tree; the gallery uses the safe setup screenshot instead. The sketches now use an ignored local secrets file, but these current-file changes do not erase values from Git history. **Rotate the Wi-Fi password and revoke/regenerate the Blynk device token before sharing or deploying this repository.** After rotating credentials, coordinate with anyone who has cloned the repo before purging old values from Git history; rewriting history changes commit IDs and requires collaborators to resync.
