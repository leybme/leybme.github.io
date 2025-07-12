
# Design and Development of a Uroflowmeter

## Skills

C++,C#,WPF, Microcontroller, Sensor, Data Acquisition, Data Processing, User Interface, Cost Analysis, Compliance, Design for Manufacturing

## Project Overview

The project aims to design and develop a state-of-the-art uroflowmeter, a medical device used to measure the flow rate of urine over time. This device is critical for diagnosing and monitoring patients with lower urinary tract symptoms (LUTS) and other urological disorders. The uroflowmeter will be designed to be user-friendly, accurate, and cost-effective, providing both patients and healthcare providers with reliable and easy-to-interpret data.

## Key technologies

1. **ESP32-S3 N16R2 Microcontroller:**
   - Provides powerful processing capabilities and built-in Wi-Fi/Bluetooth connectivity for data transfer.
   
   - Ideal for real-time data processing and interfacing with external sensors.
   
   - Offers a cost-effective solution for integrating advanced features into the uroflowmeter.
   
     **Tech: C++, FreeRTOS, ADC filter**
   
2. **Hardware:**
   - Designed to house the microcontroller and other electronic components efficiently.
   
   - Ensures a compact and reliable design for the uroflowmeter.
   
   - Used USB Hub IC for interfacing with the microcontroller to add more capabilities to expand the device
   
     **EasyEDA Pro, Power management**
   
3. **Cover:**
   - The cover is printed using PETG material, which is durable with humidity and UV resistance.
   
   - The top cover is designed with acrylic material and UV print to make the device more aesthetic.
   
   - The product is designed to be easy to assemble and disassemble for maintenance.
   
   - It has the ability to be water-resistant and easy to clean.
   
   - The funnel for urine is designed to link with the device by a magnetic connector, making it easy to clean and suitable for one-hand use.
   
     **AutoDesk Fusion 360, 3D print, laser cutting and UV print**
   
4. **Firmware and Software:**
   - The device records the urine data of patients and saves it to flash memory. Data can be transferred to a PC via a USB port or uploaded to Firebase Realtime Database.
   
   - The device is easy to use, operating with only two buttons: one for power and one for waking up the device.
   
   - The device can be updated over-the-air (OTA) without needing to connect to a PC; just connect to Wi-Fi.
   
   - Software on the PC can view both data from the device and Firebase Realtime Database, displaying the time, volume, flow rate, and graph of the flow rate. It also displays the data in a history chart.
   
     **Technology: C++, C#, Firebase RTDB**

## Outcomes

- Images of device.

- Images of PCB design.
 ![PCB design](/images/uroflowmeter/pcb1.jpg)
    ![PCB design](/images/uroflowmeter/pcb2.jpg)
     ![PCB design](/images/uroflowmeter/pcb3.jpg)
- Images of 3D design
 ![3D design](/images/uroflowmeter/3ddesign1.png)
  ![3D design](/images/uroflowmeter/3ddesign2.jpg)
   ![3D design](/images/uroflowmeter/3ddesign3.jpg)
   ![3D design](/images/uroflowmeter/3ddesign4.jpg)
  ![3D design](/images/uroflowmeter/3ddesign5.jpg)
   ![3D design](/images/uroflowmeter/3ddesign6.jpg)
     ![3D design](/images/uroflowmeter/3ddesign8.jpg)
     ![3D design](/images/uroflowmeter/label.png)
- Images of software interface.
  ![Software interface](/images/uroflowmeter/software.png)
  -I had designed this software on my bachelor thesis, and I had a lot of time to improve it. The software is designed to be user-friendly and easy to navigate, with clear instructions and visual aids to assist users in understanding the data presented. 

## Conclusion

This project aims to design and develop a high-quality uroflowmeter that addresses the needs of both patients and healthcare providers. By leveraging advanced technology and thorough cost analysis, the resulting device will be accurate, reliable, and affordable, making it a valuable tool in the field of urology.
