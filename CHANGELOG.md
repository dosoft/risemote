# Changelog

All notable user-facing changes are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.3] - 2026-08-25

### Fixed

- The tray icon is now initialized reliably when RiseMote starts minimized.

## [1.0.2] - 2026-08-25

### Changed

- The update dialog now clearly explains that restarting installs the downloaded update.

### Fixed

- The tray icon now appears immediately when RiseMote starts minimized, while the desk connection is still being restored.

## [1.0.1] - 2026-08-25

### Changed

- Error messages now appear as temporary notifications at the bottom of the main window.

### Fixed

- Launching RiseMote while it is already running in the system tray now opens the existing window.

## [1.0.0] - 2026-08-25

### Added

- Bluetooth LE discovery, connection, and automatic reconnection for IKEA IDÅSEN and compatible LINAK DPG desks.
- Live desk height, press-and-hold movement controls, target-height movement, and an immediate Stop command.
- Saved height profiles with optional global keyboard shortcuts.
- Configurable minimum and maximum desk heights.
- English and Russian user interfaces with light, dark, and system themes.
- System tray controls, connection status, movement progress, and a connection notification when starting minimized.
- Separate options for minimizing to the tray, closing to the tray, and starting with Windows.
- Automatic update checks and installation through a per-user installer that does not require administrator rights.
