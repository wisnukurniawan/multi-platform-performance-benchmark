# Multi-Platform Performance Benchmark

- **Flutter**
- **React Native**
- **React Lynx Native**


## Android - App Launch Result

| Platform        | Launch Type | Average Time (ms) |
|-----------------|-------------|-------------------|
| **Lynx Native** | Cold        | 384.3             |
|                 | Hot         | 33.0              |
| **React Native**| Cold        | 782.9             |
|                 | Hot         | 37.8              |
| **Flutter**     | Cold        | 1557.0            |
|                 | Hot         | 83.2              |

1. Cold Launch Performance:
   - React Lynx Native is the fastest (384 ms), followed by React Native (783 ms), then Flutter (1557 ms).
   - Flutter cold launch is ~4× slower than native React Lynx Native.

2. Hot Launch Performance:
   - React Lynx Native leads again (33 ms), with React Native (38 ms) close behind. Flutter (83 ms) is ~2.5× slower than React Lynx Native.

3. Consistency:
   - React Lynx Native shows the tightest range (375–393 ms cold, 25–44 ms hot).
   - Flutter has the widest spread (1514–1600 ms cold, 68–118 ms hot).