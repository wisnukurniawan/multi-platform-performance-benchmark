# Multi-Platform Performance Benchmark

Nowadays, there are various multi-platform frameworks available for mobile app development. These frameworks offer the advantage of writing code in a single language while deploying applications across multiple platforms, such as Android and iOS. This significantly makes the development process efficient, reduces maintenance efforts, and ensures consistency across different operating systems.
This project focuses on benchmarking the performance of applications built using three popular multi-platform technologies: Flutter, ReactLynx Native, and React Native. Specifically, I evaluate and compare their efficiency in two critical performance metrics: app launch time and scrolling smoothness. By analyzing these aspects, I aim to provide insights into how each framework performs.

## App Specification:
- Platform: Flutter, ReactLynx Native, React Native
- Load a 100++ list of products that  contains image and text
- OS: Android
- Device testing: Samsung Galaxy S10e
  - ABI: arm64
  - Version Number: 12
  - Version Code: 31

## App Launch Time
In this section, I evaluate the differences in time duration between cold launch and hot launch scenarios.
- A cold launch refers to an app starting from scratch. Cold launch happens in cases such as an app launching for the first time since the device booted or since the system killed the app. According to Android Vitals, a good cold launch time should not exceed 5 seconds.
- A hot launch refers to the re-launch of an app causing an Activity onResume to be triggered. According to Android Vitals, a good cold launch time should not exceed 1.5 seconds.
Cold Launch React Native - Flutter - ReactLynx Native

https://github.com/user-attachments/assets/3e1ce881-a71c-47d9-853b-9fa5f13cd152

| Platform     | Cold Launch Average (ms) | Average Hot Launch Average (ms) |
| ------------ | ---------------- | --------------- |
| ReactLynx Native  | **384.3**        | **33.0**        |
| React Native | **782.9**        | **37.8**        |
| Flutter      | **182.4**        | **79.4**        |


Based on the benchmark results, all tested frameworks successfully meet Android Vitals recommended thresholds. However:
- Flutter demonstrates the fastest cold launch time (182.4 ms), outperforming ReactLynx Native by ~53% and React Native by ~77%.
- ReactLynx Native won in hot launch performance (33.0 ms), slightly edging out React Native (37.8 ms) and significantly surpassing Flutter (79.4 ms).
- While React Native adheres to Android standards, it lags in cold launch speed compared to the other frameworks.

## Scrolling Smoothness

In this section, I assess the smoothness of scrolling behaviour using two key metrics: jank (frame drops) and FPS (frames per second).
- Jank Analysis
  - Measured using Perfetto Frame Timeline
    - Green slices: Represent frames that are rendered within the 16.6ms budget (for 60Hz displays)
    - Orange slices: Represent frames that missed the deadline (janky frames)
    - Red slices: Represent very late frames (severe jank)
  - Lower jank (orange slices, red slices) counts indicate smoother scrolling.
- FPS Monitoring
  - Tracked via GPUWatch (Android’s built-in developer tool) to capture real-time frame rates during high-velocity scrolling.
  - Consistent FPS close to 60 Hz (device refresh rate) reflects optimal performance.

Flutter


https://github.com/user-attachments/assets/54bcfdf6-c4c4-4893-8da0-2355dbe5302f

ReactLynx Native


https://github.com/user-attachments/assets/2a4e1473-b9d7-49ad-afe2-bd2ef87329dd

React Native


https://github.com/user-attachments/assets/220d5cfe-cfe2-40a6-99f5-e0d806ed9925



Based on my analysis using Perfetto and GPUWatch, the scrolling performance comparison reveals differences between the frameworks:
- Flutter demonstrated near-perfect smoothness:
  - Averaged 55-60 FPS during scrolling (close to ideal 60Hz refresh rate)
  - Showed no orange slices in Perfetto (indicating zero dropped frames)
  - Delivered a smooth scrolling experience
- ReactLynx Native showed good performance:
  - Averaged 45-55 FPS during scrolling
  - Displayed small orange slices (minor frame drops)
  - Delivered a smooth scrolling experience
- React Native shows the most performance challenges:
  - Averaged 35-50 FPS during scrolling
  - Showed frequent orange slices (multiple dropped frames)
  - Most noticeable jank and stuttering during scrolling








