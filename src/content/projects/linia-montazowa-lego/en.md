---
title: LEGO assembly line
summary: An automated four-station assembly line with a PLC, RFID, Pick-to-Light, vision inspection and an MES system with an OEE dashboard.
category: automatyka
date: 2026-03-01
dateEnd: 2026-08-31
cover: ./linia-widok.jpg
coverAlt: Assembly line with three stations, HMI panels, part bins and a roller conveyor carrying orange pallets
tags: [SIMATIC S7-1200, TIA Portal / SCL, RFID, Pick-to-Light, Modbus TCP, Machine vision, C# / .NET, Blazor, MS SQL, 3D printing]
role: Team project — Poznań University of Technology
duration: 6 months
github: https://github.com/Zaworek03/Lego_Assembly_Line
featured: true
---

An automated assembly line for LEGO models with three assembly stations and a quality control station. The project combines PLC control, operator panels, RFID identification, machine vision and a supervisory MES system with a database and a web application.

![Side view of the assembly line — roller conveyor with pallets and stations](./linia-bok.jpg)

## How it works

An order created in the web app is sent to the PLC. A pallet with an RFID tag travels through three assembly stations and the QC station. Results — cycle times, rejects, component usage and OEE — go back to the database and are shown on the dashboard.

1. **Order** — created in the web app, with component availability checked against inventory.
2. **Station 1** — writes the order and model number to the pallet's RFID tag.
3. **Stations 2 and 3** — assembly following instructions on the HMI panel, picking bricks from Pick-to-Light bins.
4. **QC station** — reads RFID, runs a camera inspection and records an OK / NOK decision with a reject reason.

## PLC layer

Production logic written in **SCL** on a **SIMATIC S7-1200** controller. Each station is a state machine (Ready → Assembly → Done / Fault) with a countdown to the target time for the given product.

- **RFID** — Balluff readers via a BNI XG3 IO-Link master.
- **Pick-to-Light** — Banner DXM700 gateway polled over **Modbus TCP**; pressing a button decrements the bin counter.
- **Vision inspection** — Balluff BVS sensor above the pallet at the QC station.

![Control cabinet — SIMATIC S7-1200, SCALANCE switch, SITOP power supply and Banner DXM700 gateway](./szafa-sterownicza.jpg)

## Operator panels (HMI)

Four panels, one per station. The work screen shows the assembly instruction with a model view, a timer and Start / Finish / Report fault buttons.

![Assembly station — HMI panel, brick bins and Pick-to-Light buttons](./stanowisko-montazowe.jpg)

![Assembly screen on the HMI panel](./hmi-montaz.png)

![Quality control screen on the HMI panel](./hmi-qc.png)

## MES system — middleware, database and dashboard

- **Middleware (C#, S7.Net)** — polls the PLC every 200 ms, feeds orders from the SQL queue, registers parts after QC and books component usage. On startup it validates the data block memory layout so a structure change can't silently write data to the wrong offsets.
- **MS SQL database** — products, BOM, routings, orders, inventory; a trigger calculates **OEE**, availability, performance, quality and FTY after every cycle.
- **Dashboard (Blazor)** — live OEE, station status, prioritised orders, component inventory and reports.

![Dashboard with OEE and station status](./web-dashboard.png)

![Production orders list](./web-zlecenia.png)

![Component inventory view](./web-magazyn.png)

## Mechanical design

Aluminium profile frame. Parts designed within the project and 3D printed: transport pallets with an RFID tag slot, HMI panel mounts, sensor bases, camera mount, positioning stops, cable organisers and station markers.

![3D-printed transport pallet](./paletka.jpg)

## Results

| Parameter             | Value                            |
| --------------------- | -------------------------------- |
| Stations              | 3 assembly + 1 quality control   |
| Products              | 6 LEGO models                    |
| Cycle time            | 111–182 s per product            |
| PLC order queue       | 200 orders                       |
| Networked devices     | PLC, 4 × HMI, IO-Link, Pick-to-Light, camera |
