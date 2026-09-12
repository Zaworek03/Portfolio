---
title: Warcabot — checkers-playing robot
summary: A robotic cell where a six-axis Comau Racer 3 plays a full game of checkers against a human — with machine vision, a mapp View panel and an AI engine over OPC UA.
category: robotyka
date: 2026-07-01
cover: ./stanowisko.jpg
coverAlt: Warcabot cell — aluminium profile enclosure with a Comau robot, checkers board, camera above the board and control cabinet below
tags: [B&R Automation Studio, Structured Text, mapp Motion, mapp Vision, mapp View, Comau Racer 3, OPC UA, POWERLINK, C / Python]
role: Team leader (6 people)
github: https://github.com/Zaworek03/Warcbot
---

**Warcabot** is an automated cell where a six-axis **Comau Racer 3** industrial robot plays a full game of checkers against a human. The player chooses moves only on a touch panel, while every physical action on the board — moving pieces, captures and placing captured pieces in a buffer — is done by the robot. A camera continuously verifies piece positions and the correctness of each move.

![Sketch of the Warcabot cell](./szkic-stanowiska.png)

## My role

I was the **leader of a 6-person team**. I managed the whole project workflow: **assigning tasks**, tracking progress and **merging the code** from all team members into one working application.

## How it works

Each move takes three steps:

1. **The player picks a move** on the screen — only moves allowed by the rules are highlighted, verified by the checkers engine.
2. **The camera checks the board** — it takes a picture and compares the physical pieces with the logical game state.
3. **The robot makes the move** — picks the piece with a magnetic gripper, moves it to the target square and places captured pieces in the buffer next to the board.

![Board with pieces and buffers for captured pieces on both sides](./plansza.jpg)

## Control and robot motion

The application runs on a **B&R** panel PC in **Automation Studio** with **mapp Technology** packages. It is modular — each function is a separate cyclic task:

- **MotionCtrl** — robot state machine: power on, homing, manual mode, move execution.
- **MainProgram** — main game state machine: board verification, step control, capture sequence.
- **camera / CheckVision** — image acquisition, mapping pieces to squares and comparing with the game state.
- **GameStats, SaveGame, AlarmHistory** — move history, save / load game, alarm history.

Robot motion sequences are written in **Structured Text (ST Motion)** — moving a piece with a safe vertical approach and returning home. Before testing on the physical robot, the whole system was verified on a digital model of the cell in **Scene Viewer**.

![Comau Racer 3 end effector with gripper](./efektor.jpg)

## Checkers engine (AI)

Game logic comes from a separate [checkers engine](https://github.com/dashin2004/Checkers-Engine-Warcbot): a **C** core compiled into a Python extension and a **Python** control layer connected to the controller over an encrypted **OPC UA** channel.

- **bitboard** board representation and **negamax search with alpha-beta** pruning,
- transposition table, killer moves, a hand-tuned evaluation function and an opening book,
- **5 difficulty levels** — from 1-ply to 15-ply, plus a "troll" mode (worst move) and random mode.

## Operator panel (mapp View)

The visualization is the only human–machine interface: main screen, interactive 8×8 board with game statistics, alarms, robot manual mode (joint and Cartesian jog) and login-protected settings. The panel supports Polish and English.

![Main screen of the mapp View visualization](./hmi-main.png)

![Play screen — interactive board and game statistics](./hmi-play.png)

![Manual mode — Cartesian and joint jog, axis positions](./hmi-manual.png)

![B&R handheld panel running the visualization](./panel-bnr.jpg)

## Hardware and safety

| Module                | Type                          |
| --------------------- | ----------------------------- |
| Panel PC / PLC        | B&R 5APC3100.KBU1-000         |
| 6-axis robot          | Comau Racer 3                 |
| Camera                | B&R mapp Vision VSS112Q22     |
| Drives                | ACOPOS 8EI (POWERLINK)        |
| Inputs / outputs      | X20 — Safety, gripper         |

The cell monitors the workspace and axes, handles **E-STOP** and lets the game resume after a Safety reset without restarting the machine. mapp services provide alarms (AlarmX), game saving (Recipe), audit trail and user management.

![Control station with buttons and emergency stop](./kaseta-sterownicza.jpg)

![Hardware topology in Automation Studio](./topologia.png)

![3D-printed buffer for captured pieces](./bufor-pionkow.png)

## Team

Bartosz Zawłocki · Andrzej Działak · Mateusz Skrzypiński · Szymon Markowski · Adam Witczak · Piotr Piechocki
