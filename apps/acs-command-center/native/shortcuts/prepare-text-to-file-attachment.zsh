#!/bin/zsh
set -euo pipefail

SCRIPT_DIR=${0:a:h}
SOURCE="$SCRIPT_DIR/Text to File Attachment.shortcut.plist"
OUTPUT_DIR="/Users/dinamargelovich/Library/Application Support/NEURO-DIV/Shortcut Installation"
UNSIGNED="$OUTPUT_DIR/Text to File Attachment.unsigned.shortcut"
SIGNED="$OUTPUT_DIR/Text to File Attachment.shortcut"

/bin/mkdir -p "$OUTPUT_DIR"
/usr/bin/plutil -lint "$SOURCE"
/bin/cp "$SOURCE" "$UNSIGNED"
/usr/bin/plutil -convert binary1 "$UNSIGNED"
/bin/rm -f "$SIGNED"
/usr/bin/shortcuts sign --mode people-who-know-me --input "$UNSIGNED" --output "$SIGNED"
/bin/rm "$UNSIGNED"
/usr/bin/open "$SIGNED"
