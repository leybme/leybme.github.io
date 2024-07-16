
## Project Description: Design and Development of a Uroflowmeter

### Project Overview

The project aims to design and develop a state-of-the-art uroflowmeter, a medical device used to measure the flow rate of urine over time. This device is critical for diagnosing and monitoring patients with lower urinary tract symptoms (LUTS) and other urological disorders. The uroflowmeter will be designed to be user-friendly, accurate, and cost-effective, providing both patients and healthcare providers with reliable and easy-to-interpret data.

### Objectives

1. **Design and Prototyping:**
   - Create a robust design for the uroflowmeter, including a detailed schematic and PCB layout.
   - Develop a prototype using the ESP32 S3 N16R2 microcontroller, ensuring efficient data processing and connectivity.

2. **Component Integration:**
   - Integrate a high-precision load cell sensor to accurately measure the flow rate of urine.
   - Design a custom PCB to accommodate the necessary electronic components, ensuring compactness and reliability.

3. **User Interface:**
   - Develop a user-friendly interface for both patients and healthcare providers.
   - Implement a display system to show real-time flow rate data and historical trends.

4. **Cost Analysis and Optimization:**
   - Conduct a thorough cost analysis of all components, including the microcontroller, load cell sensor, PCB, other electronic ICs, acrylic cover with UV print, and 3D printed parts.
   - Optimize the design to ensure cost-effectiveness without compromising on quality and accuracy.

5. **Testing and Validation:**
   - Perform extensive testing to validate the accuracy and reliability of the uroflowmeter.
   - Ensure the device complies with medical standards and regulations.

### Key technologies

1. **ESP32-S3 N16R2 Microcontroller:**
   - Provides powerful processing capabilities and built-in Wi-Fi/Bluetooth connectivity for data transfer.
   - Ideal for real-time data processing and interfacing with external sensors.
   - Offers a cost-effective solution for integrating advanced features into the uroflowmeter.
   - **Language: C++**

2. **Hardware:**
   - Designed to house the microcontroller and other electronic components efficiently.
   - Ensures a compact and reliable design for the uroflowmeter.
   - Used USB Hub IC for interfacing with the microcontroller add more capabilities to expand the device. 
   - **Software: EasyEDA Pro**

3. **Cover:**
   - The cover is printed by PETG material, durable with humidity and UV resistance.
   - The top cover is design by acrylic material with UV print to make the device more aesthetic.
   - The design of product is design for easy to assemble and disassemble for maintenance.
   - It have ability to water resistance and easy to clean.
   - The funnel for urine is design to link with the device by a magnetic connector, easy to clean and one-hand use.
   - **Software: Fusion 360**

4. **Firmware and Software:**
   - The device record the urine data of patient and save to flash memory. data can transfer to PC via USB port or upload to Firebase Realtime Database.
   - The device is can easy use, work with only 2 button, one for power and one for wake up the device.
   - The device can OTA update without need to connect to PC, just connect to Wi-Fi.
   - Software on PC can view both data from device and Firebase Realtime Database. Display the time, volume, flow rate, and graph of flow rate. It also display the data in history chart.
   - **Technology: C++, C##, Firebase RTDB**

### Outcomes

- Images of device.
- Images of PCB design.
- Images of 3D design
- Images of software interface.

### Conclusion

This project aims to design and develop a high-quality uroflowmeter that addresses the needs of both patients and healthcare providers. By leveraging advanced technology and thorough cost analysis, the resulting device will be accurate, reliable, and affordable, making it a valuable tool in the field of urology.