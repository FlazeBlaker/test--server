#!/bin/bash

# ==============================================================================
# Git Push Script
# ==============================================================================
# This script automates the process of adding, committing, and pushing changes.
# It prompts the user for a commit message.
#
# INSTRUCTIONS:
# 1. Save this file as "push.sh" in the root of your project directory.
# 2. Open your terminal (like Git Bash on Windows) in the project directory.
# 3. Run the script by typing: ./push.sh
# ==============================================================================

# --- SCRIPT START ---
echo " "
echo "🚀 Starting the Git push process..."
echo "----------------------------------------"

# Step 1: Add all changes to the staging area
echo " "
echo "Step 1: Staging all changes..."
git add .
echo "✅ All changes have been staged."

# Step 2: Prompt for a commit message
echo " "
echo "Step 2: Please enter a commit message."
read -p "Commit message: " COMMIT_MESSAGE

# Check if the commit message is empty
if [ -z "$COMMIT_MESSAGE" ]; then
  echo "❌ Error: Commit message cannot be empty. Aborting."
  exit 1
fi

# Step 3: Commit the changes
echo " "
echo "Step 3: Committing with your message..."
git commit -m "$COMMIT_MESSAGE"
echo "✅ Changes committed."

# Step 4: Push to the remote repository
echo " "
echo "Step 4: Pushing to the remote server..."
git push
echo " "
echo "----------------------------------------"
echo "🎉 Push complete! Your changes are now on the server."
echo " "
