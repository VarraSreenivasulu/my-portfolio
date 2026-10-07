# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "playwright",
# ]
# ///

import subprocess
import time
import urllib.request
from playwright.sync_api import sync_playwright
import os

# Start a simple HTTP server in the current directory
server_process = subprocess.Popen(["python", "-m", "http.server", "8080"])
time.sleep(2) # Give it time to start

try:
    with sync_playwright() as p:
        # Launch browser
        # Ensure browsers are installed
        subprocess.run(["python", "-m", "playwright", "install", "chromium"], check=True)
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        
        page.goto("http://localhost:8080")
        
        # Wait for the hero section to load and render
        page.wait_for_selector(".hero")
        time.sleep(1) # wait for animations
        
        # Take a screenshot of the hero section
        hero = page.locator(".hero")
        screenshot_path = r"C:\Users\varra\.gemini\antigravity\brain\abda5cf3-6534-49f4-8d14-f53e2881e10f\scratch\hero_screenshot.png"
        os.makedirs(os.path.dirname(screenshot_path), exist_ok=True)
        hero.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")
        
        browser.close()
finally:
    server_process.terminate()
