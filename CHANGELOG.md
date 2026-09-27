# Changelog

All notable user-facing changes are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.1] - 2026-09-27

### Fixed

- The notification window position is now correct.

## [1.2.0] - 2026-09-26

### Changed

- The user interface was rebuilt on Avalonia with the same Fluent/WinUI look. The application now uses about 60% less memory, starts roughly twice as fast, and the installer download is about three times smaller (NativeAOT build).

## [1.1.2] - 2026-08-27

### Fixed

- Adding a new preset no longer suggests an out-of-range height (6500 mm) when the desk is not connected; it now uses the configured minimum height.
- A failed desk movement no longer blocks subsequent movements: the previous exception is no longer rethrown when starting a new move or pressing Stop.
- The tray movement popup now closes when the main window is restored from the taskbar during a move, instead of leaving two progress indicators on screen.
- Settings validation now reports a clear error instead of crashing when a preset name is missing (for example, after editing `settings.json` by hand).
- The preset height validation error now identifies the offending property, making it easier to find broken entries in `settings.json`.

### Changed

- Updated the website icon to match the v1.1.1 application icon, and added proper `favicon.ico`, sized PNG favicons, and an Apple touch icon. The header logo is now served from a 10 KB file instead of a 1.1 MB source asset.

## [1.1.1] - 2026-08-27

### Changed

- Update checks started from the tray now report an up-to-date version through a tray notification; when an update is available, the tray command changes to **Update** and opens the update dialog.
- Updated the application icon across the executable, taskbar, tray, and in-app logos.

## [1.1.0] - 2026-08-26

### Added

- Added a **Check for updates** command to the system tray menu.
- Added Stream Deck setup instructions and a sample desk-control layout to the documentation and website.

### Changed

- The Bluetooth device window now shows the active connection, supports disconnecting it, and keeps scanning for other devices.
- Bluetooth devices likely to be compatible desks are highlighted, and device details are arranged in consistent columns.
- The Bluetooth window is wider, closes with Escape, and uses theme-aware secondary text colors.
- Tray menus and movement notifications now update immediately when the application language changes.

### Fixed

- Starting RiseMote minimized no longer briefly flashes the main window while creating the tray icon.
- The selected desk stays selected while the Bluetooth device list is updating.
- Reconnecting to a previously paired desk is faster when Windows already has its Bluetooth services cached.

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
