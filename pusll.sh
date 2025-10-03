#!/bin/bash

# ==============================================================================
# Git Pull Script (with Conflict Helper)
# ==============================================================================
# This script safely pulls the latest changes from the remote repository.
# If a merge conflict occurs, it will attempt to open the conflicted files
# in Visual Studio Code to make resolving them easier.
#
# INSTRUCTIONS:
# 1. Make sure you have the 'code' command available in your terminal.
#    (In VS Code, open the Command Palette (Ctrl+Shift+P) and run
#    'Shell Command: Install 'code' command in PATH').
# 2. Run the script by typing: ./pull.sh
# ==============================================================================

# --- SCRIPT START ---
echo " "
echo "🚀 Pulling the latest changes from the server..."
echo "----------------------------------------"
echo " "

# Pull with rebase. If it fails, we'll handle the conflict.
if git pull --rebase; then
  # This part runs if the pull is successful (no conflicts)
  echo " "
  echo "----------------------------------------"
  echo "🎉 Pull complete! Your local repository is now up-to-date."
  echo " "
else
  # This part runs if the pull fails (likely a merge conflict)
  echo " "
  echo "----------------------------------------"
  echo "⚠️ CONFLICT DETECTED! The rebase has paused."
  
  # Find all files with conflicts (status 'U' for unmerged)
  CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
  
  if [ -n "$CONFLICTED_FILES" ]; then
    echo "I will now attempt to open the following conflicted files in VS Code:"
    echo "$CONFLICTED_FILES"
    # Attempt to open the files in VS Code
    code $CONFLICTED_FILES
  fi

  echo " "
  echo "👉 YOUR NEXT STEPS:"
  echo "   1. Manually resolve the conflicts in the files that were just opened."
  echo "   2. Save the files."
  echo "   3. Stage the resolved files by running: git add ."
  echo "   4. Continue the rebase by running:   git rebase --continue"
  echo " "
fi

