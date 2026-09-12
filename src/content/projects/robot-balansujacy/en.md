---
title: Self-balancing robot
summary: A two-wheeled inverted pendulum robot with a PID controller and complementary filter on ESP32.
category: embedded
date: 2024-11-01
cover: ./cover.svg
coverAlt: Drawing of a two-wheeled self-balancing robot
tags: [ESP32, FreeRTOS, PID, IMU, KiCad]
role: University project
duration: 3 months
github: https://github.com/
---

> Sample project — replace with your own content.

## Problem

Keeping a robot with a high centre of mass upright under external disturbances.

## Solution

IMU (MPU-6050) readings every 5 ms, sensor fusion with a complementary filter and a cascaded PID controller: angle → velocity. Gains tuned live over Bluetooth.

## Results

The robot recovers from a light push and drives around controlled from a phone.
