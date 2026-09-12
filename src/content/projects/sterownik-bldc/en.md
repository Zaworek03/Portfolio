---
title: BLDC motor controller
summary: A four-layer FOC motor controller board rated up to 30 A with current sensing and a CAN interface.
category: elektronika
date: 2025-02-01
cover: ./cover.svg
coverAlt: Drawing of a motor controller PCB
tags: [KiCad, FOC, STM32G4, CAN, SMD]
role: Student research club project
duration: 4 months
featured: true
---

> Sample project — replace with your own content.

## Problem

Off-the-shelf controllers were too big and too expensive for the drives of our club's mobile robot.

## Solution

A custom 50 × 50 mm board designed in KiCad: MOSFET bridge, three current shunts, an STM32G4 microcontroller and a CAN transceiver. Firmware based on field-oriented control (FOC).

## Results

Stable operation at 24 V and 25 A continuous, with transistor temperature below 70 °C without a heatsink.
