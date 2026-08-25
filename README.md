# RiseMote

[![Latest release](https://img.shields.io/github/v/release/dosoft/risemote?display_name=tag&sort=semver&label=release)](https://github.com/dosoft/risemote/releases/latest)

RiseMote connects to a compatible height-adjustable desk over Bluetooth LE. It shows the current height and moves the desk manually or to a saved position.

[Download the latest release](https://github.com/dosoft/risemote/releases/latest) · [Project website](https://dosoft.github.io/risemote/) · [Русская версия](README.ru.md)

## What it does

- Shows the current desk height.
- Moves the desk up or down, or to an exact height.
- Saves heights as profiles with optional global keyboard shortcuts.
- Sets minimum and maximum movement limits.
- Shows connection status and movement progress in the system tray.
- Remembers the selected desk and can reconnect automatically.
- Supports English and Russian, with light, dark, and system themes.
- Checks for application updates.

## Compatibility

RiseMote works with IKEA IDÅSEN desks and compatible LINAK DPG controllers. Compatibility depends on the controller firmware and the Bluetooth LE adapter in the computer.

## Requirements

- Windows 10 version 1809 or later, or Windows 11.
- A computer with Bluetooth LE.

## Installation

1. Open the [latest release](https://github.com/dosoft/risemote/releases/latest).
2. Download `risemote-win-Setup.exe`.
3. Run the installer. Administrator rights and a separate .NET installation are not required.

The installer is not digitally signed, so Windows may display a SmartScreen warning. The files published on the release page are the official RiseMote builds.

## First connection

1. Turn on Bluetooth and keep the desk nearby.
2. Open RiseMote and select **Find desk**.
3. Choose a compatible desk from the list.

The selected desk is remembered for later connections. If Windows requests pairing, complete it in Windows Settings first.

## Settings and diagnostics

Settings are stored locally in `%LOCALAPPDATA%\RiseMote\settings.json`. Diagnostic logs are stored in `%LOCALAPPDATA%\RiseMote\logs`.

If the desk is not found, check that Bluetooth is enabled, move the computer closer to the desk, and make sure another application is not connected to it. Problems can be reported in [GitHub Issues](https://github.com/dosoft/risemote/issues); a relevant log file may help with diagnosis.

## Updates and release notes

Updates can be checked and installed from the application. Changes between versions are listed in the [changelog](CHANGELOG.md).

## Support the project

If RiseMote is useful to you, you can support its maintenance:

- [Star the repository on GitHub](https://github.com/dosoft/risemote).
- [Donate via PayPal](https://paypal.me/olegda).
- USDT (TRC20): `TH1EKSqqK8EqGtfjpVbGi9YWjqpqy2rC7h`.
- GRAM (TON): `UQDIDJxzNDWlkv2ZQl6nxourhU7nwlBkErXDE3W7wJkJ_dGf`.

## Acknowledgements

During protocol research and early development, RiseMote used [rhyst/linak-controller](https://github.com/rhyst/linak-controller) as a reference. Thanks to rhyst for publishing the research and the project. RiseMote is an independent application and is neither affiliated with nor endorsed by that project or its author.

## Trademarks

RiseMote is unofficial software and is not affiliated with, endorsed by, or approved by IKEA or LINAK. IKEA, IDÅSEN, LINAK, and Bluetooth are trademarks of their respective owners and are used only to describe compatibility.
