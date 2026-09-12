---
title: 6DOF robot arm
summary: A six-axis manipulator made of printed parts, controlled via ROS 2 with custom inverse kinematics.
category: robotyka
date: 2025-06-01
cover: ./cover.svg
coverAlt: Drawing of a robot arm with six joints
tags: [ROS 2, STM32, Fusion 360, C++, 3D printing]
role: Personal project
duration: 5 months
github: https://github.com/
featured: true
---

> Sample project — replace with your own content.

## Problem

I wanted a low-cost manipulator for learning motion planning, built from printed parts and easy-to-source stepper motors.

## Solution

- **Mechanics:** body designed in Fusion 360, 1:5 belt reductions on the first three axes.
- **Electronics:** STM32F4 board with six TMC2209 drivers, USB link to the PC.
- **Software:** ROS 2 node with inverse kinematics and trajectory planning in MoveIt.

```cpp
// Control loop excerpt
for (auto& joint : joints) {
  joint.update(dt);
}
```

## Results

| Parameter     | Value    |
| ------------- | -------- |
| Reach         | 520 mm   |
| Payload       | 0.5 kg   |
| Repeatability | ±1.2 mm  |

## What I learned

Backlash in printed gears affects accuracy more than motor resolution — the next version will use cycloidal drives.
