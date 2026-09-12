---
title: Robot balansujący
summary: Dwukołowy robot typu odwrócone wahadło z regulatorem PID i filtrem komplementarnym na ESP32.
category: embedded
date: 2024-11-01
cover: ./cover.svg
coverAlt: Schemat dwukołowego robota balansującego
tags: [ESP32, FreeRTOS, PID, IMU, KiCad]
role: Projekt zaliczeniowy
duration: 3 miesiące
github: https://github.com/
---

> Przykładowy projekt — podmień treść na własną.

## Problem

Utrzymanie w pionie robota o wysoko położonym środku ciężkości przy zakłóceniach z zewnątrz.

## Rozwiązanie

Odczyt z IMU (MPU-6050) co 5 ms, fuzja danych filtrem komplementarnym i kaskadowy regulator PID: kąt → prędkość. Parametry strojone na żywo przez Bluetooth.

## Wyniki

Robot utrzymuje równowagę po lekkim popchnięciu i jeździ sterowany z telefonu.
