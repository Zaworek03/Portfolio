---
title: Sterownik silnika BLDC
summary: Czterowarstwowa płytka sterownika FOC do 30 A z pomiarem prądu i interfejsem CAN.
category: elektronika
date: 2025-02-01
cover: ./cover.svg
coverAlt: Schemat płytki PCB sterownika silnika
tags: [KiCad, FOC, STM32G4, CAN, SMD]
role: Projekt koła naukowego
duration: 4 miesiące
featured: true
---

> Przykładowy projekt — podmień treść na własną.

## Problem

Gotowe sterowniki były za duże i za drogie do napędów w robocie mobilnym koła naukowego.

## Rozwiązanie

Własna płytka 50 × 50 mm w KiCadzie: mostek MOSFET, trzy boczniki do pomiaru prądu, mikrokontroler STM32G4 i transceiver CAN. Firmware oparty na sterowaniu wektorowym (FOC).

## Wyniki

Stabilna praca przy 24 V i 25 A ciągłego prądu, temperatura tranzystorów poniżej 70 °C bez radiatora.
