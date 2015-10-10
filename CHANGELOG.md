## 1.1.2 (August 31, 2015)

Bugfixes:

  - Fixed 'grunt dist' task that wasn't able to run out-of-the-box
  - Replaced grunt-contrib-sass with grunt-sass to eliminate users having to downgrade the Sass gem


## 1.1.1 (August 7, 2015)

Bugfixes:

  - Fixed .btn-primary not changing into theme color
  - Set version numbers for packages that were using latest or master

## 1.1.0 (June 19, 2015)

Features:

  - Created a HTML version of the template
    - Replaced angular strap's datepickers with bootstrap datepickers
  - Switched the default grunt task to 'dev'
  - Split grunt config into separate files

Bugfixes:

  - Fixed sidebar backdrop not filling entire background when scrolled down
  - Removed ng-device-detector
  - Fixed floating labels for login page
  - Created directive for sidebar toggle
  - Replaced jquery plugin arrive with directive for ripples
  - Date fields filled with default value
  - ng-table uppercase search fixed
  - interval fix for dashboard crashes
  - loading bar latency for better performance
  - keyframe mixin

## 1.0.0 (May 6, 2015)

Initial release