
# Find and Replace Tool

This simple web-based tool allows users to enter or paste text into a text area, find a specific word or phrase, and replace it with another word or phrase.

## Features

Find: Users can enter a word or phrase to search for.
Replace: Users can enter a word or phrase to replace the found word/phrase with.
Text Area: A large input field where users can type or paste text.
Output Text: A read-only text area that displays the updated text after the find-and-replace operation.

## How to Use

1. Paste or type the text in the input area.
2. Enter the word or phrase you want to find in the "Find" input field.
3. Enter the word or phrase you want to replace it with in the "Replace with" input field.
4. Click the "Replace" button.
5. The updated text will appear in the output text area.

## Assumptions and Limitations

This tool performs case-sensitive replacements. It does not account for case-insensitive replacements.
It supports global replacements (replacing all occurrences of the find text).
The input and output text areas are limited to text-based input. Special formatting or non-text content will not be preserved.

## Improvements

Implementing case-insensitive search and replace.
Adding the ability to undo the replacement operation.
Providing feedback about the number of occurrences replaced.