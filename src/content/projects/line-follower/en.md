---
title: Line Follower
summary: A fast line-following robot — custom PCB with an ESP32-S3, 8 IR reflective sensors, an L298N H-bridge and a PD controller written against the microcontroller's registers.
category: elektronika
date: 2025-10-01
dateEnd: 2026-01-31
cover: ./robot.jpg
coverAlt: Assembled red Line Follower PCB with an ESP32-S3, H-bridge, two motors with 3D-printed wheels and a strip of eight sensors
tags: [KiCad, ESP32-S3, C / C++, PD controller, PWM, ADC, L298N, TCRT5000, 3D printing]
role: Individual project — Microprocessor Controllers course
video:
  src: projects/line-follower/przejazd.mp4
  poster: ./przejazd-poster.jpg
  caption: The robot running on the test track
---

A project for the **Microprocessor Controllers** course (Mechatronics, 5th semester). The goal was to design and build a **PCB** on my own and write **register-level firmware** for a fast Line Follower robot driven by a **PD algorithm**.

The robot follows a black line on a light background. Eight IR reflective sensors measure the line position, the microcontroller calculates the deviation and the PD controller corrects the speed of both motors. The program starts with a START button, and the board is programmed over USB-C.

## Electronics

I designed the board in **KiCad** — from the schematic to a two-layer PCB with the sensor strip extended in front of the wheels.

- **MCU:** ESP32-S3-WROOM-1U, programmed over USB-C (with ESD protection),
- **Sensors:** 8 × TCRT5000L (IR LED + phototransistor) on ADC1 and ADC2 inputs,
- **Drive:** **L298N** H-bridge with Schottky diodes, 20 kHz PWM, two DC motors,
- **Power:** 18650 pack (10.8 V) via a JST connector, AMS1117-3.3 regulator,
- **Buttons:** START, RESET and BOOT.

![Schematic — MCU, USB-C, voltage regulator, motor driver and sensors](./schemat.png)

| Top layer                                  | Bottom layer                                  |
| ------------------------------------------ | --------------------------------------------- |
| ![Top PCB layer](./pcb-gora.png)           | ![Bottom PCB layer](./pcb-dol.png)            |

### Calculations

Component values were chosen by calculation — e.g. the IR LED resistor: (3.3 V − 1.25 V) / 20 mA ≈ 102 Ω → **100 Ω**, giving 20.5 mA and 42 mW, below the 62 mW rating of an 0603 package. With 37 mm wheels and 1000 rpm motors, the theoretical speed is **about 1.94 m/s**.

## Firmware

The C/C++ firmware uses ESP-IDF drivers and GPIO registers directly instead of high-level Arduino functions:

- fast pin switching with macros on the `GPIO.out_w1ts` / `GPIO.out_w1tc` registers,
- PWM on the **LEDC** peripheral (20 kHz, 8-bit) for the H-bridge enable inputs,
- reading 8 sensors from **ADC1 and ADC2**, with a weighted line position used as the control error,
- **PD controller** (Kp = 1.8, Kd = 0.6), with separate handling of 90° turns by the outer sensors,
- a full-power "kick start" when starting and a stop after 3 s without a detected line.

```cpp
int blad = policzBlad();            // error
int pochodna = blad - ostatni_blad; // derivative
ostatni_blad = blad;
int korekta = Kp * blad + Kd * pochodna;
int predkosc_lewa  = constrain(PREDKOSC_BAZOWA + korekta, PREDKOSC_MIN, PREDKOSC_MAX);
int predkosc_prawa = constrain(PREDKOSC_BAZOWA - korekta, PREDKOSC_MIN, PREDKOSC_MAX);
ustawPredkosc(predkosc_prawa, predkosc_lewa);
```

## Lessons learned

After testing I noted what I would improve in the next revision:

- **Sensors** — the ~80 mm spread made the robot lose the line in sharp turns; an odd number of sensors would give more precise positioning.
- **Weight distribution** — heavier parts such as the H-bridge should move to the back; the batteries worked best at the rear.
- **Wheels** — the printed wheels had too little grip (temporarily wrapped in tape); cast silicone tyres are the target fix.
- **Serviceability** — without a UART header I had to connect directly to the board.
- **Drive** — higher-torque motors would make starting easier.
