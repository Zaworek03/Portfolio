---
title: Ramię robota 6DOF
summary: Sześcioosiowy manipulator z drukowanych części, sterowany przez ROS 2 z własną kinematyką odwrotną.
category: robotyka
date: 2025-06-01
cover: ./cover.svg
coverAlt: Schemat ramienia robota z sześcioma przegubami
tags: [ROS 2, STM32, Fusion 360, C++, Druk 3D]
role: Projekt samodzielny
duration: 5 miesięcy
github: https://github.com/
featured: true
---

> Przykładowy projekt — podmień treść na własną.

## Problem

Chciałem zbudować tani manipulator do nauki planowania ruchu, który da się złożyć z części drukowanych i łatwo dostępnych silników krokowych.

## Rozwiązanie

- **Mechanika:** korpus zaprojektowany w Fusion 360, przekładnie pasowe 1:5 na trzech pierwszych osiach.
- **Elektronika:** płytka z STM32F4 i sześcioma driverami TMC2209, komunikacja z komputerem przez USB.
- **Software:** węzeł ROS 2 z kinematyką odwrotną i planowaniem trajektorii w MoveIt.

```cpp
// Fragment pętli sterowania
for (auto& joint : joints) {
  joint.update(dt);
}
```

## Wyniki

| Parametr        | Wartość    |
| --------------- | ---------- |
| Zasięg          | 520 mm     |
| Udźwig          | 0,5 kg     |
| Powtarzalność   | ±1,2 mm    |

## Czego się nauczyłem

Luzy w przekładniach drukowanych mają większy wpływ na dokładność niż rozdzielczość silników — w kolejnej wersji planuję przekładnie cykloidalne.
