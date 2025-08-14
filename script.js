// DOM Elements
const colorInput = document.getElementById("colorInput");
const showColorBtn = document.getElementById("showColorBtn");
const errorMessage = document.getElementById("errorMessage");
const colorDisplay = document.getElementById("colorDisplay");
const colorPreview = document.getElementById("colorPreview");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const hslValue = document.getElementById("hslValue");
const presetColors = document.querySelectorAll(".preset-color");
const valueElements = document.querySelectorAll(".value");

// Utility Functions
function isValidHex(hex) {
  // Remove # if present
  hex = hex.replace("#", "");

  // Check if it's 3 or 6 characters and contains only valid hex characters
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(hex);
}

function normalizeHex(hex) {
  // Remove # if present
  hex = hex.replace("#", "");

  // Convert 3-character hex to 6-character
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  return "#" + hex.toUpperCase();
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function getTextColor(hex) {
  const rgb = hexToRgb(hex);
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#FFFFFF";
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("opacity-0");
  errorMessage.classList.add("opacity-100");
  setTimeout(() => {
    errorMessage.classList.remove("opacity-100");
    errorMessage.classList.add("opacity-0");
  }, 3000);
}

function displayColor(hex) {
  const normalizedHex = normalizeHex(hex);
  const rgb = hexToRgb(normalizedHex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const textColor = getTextColor(normalizedHex);

  // Update color preview
  colorPreview.style.backgroundColor = normalizedHex;
  colorPreview.querySelector(".preview-text").style.color = textColor;

  // Update color information
  hexValue.querySelector("span:last-child").textContent = normalizedHex;
  rgbValue.querySelector(
    "span:last-child"
  ).textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  hslValue.querySelector(
    "span:last-child"
  ).textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

  // Show color display
  colorDisplay.classList.remove("hidden");
  colorDisplay.classList.add("block");

  // Scroll to color display
  colorDisplay.scrollIntoView({ behavior: "smooth" });
}

function processColorInput() {
  const inputValue = colorInput.value.trim();

  if (!inputValue) {
    showError("Please enter a hex color code");
    return;
  }

  if (!isValidHex(inputValue)) {
    showError("Invalid hex color format. Use format like #FF5733 or FF5733");
    return;
  }

  displayColor(inputValue);
  errorMessage.textContent = "";
}

// Event Listeners
showColorBtn.addEventListener("click", processColorInput);

colorInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    processColorInput();
  }
});

colorInput.addEventListener("input", (e) => {
  let value = e.target.value;

  // Auto-add # if not present and user starts typing hex characters
  if (value.length === 1 && /[0-9A-Fa-f]/.test(value)) {
    value = "#" + value;
    e.target.value = value;
  }

  // Clear error message when user starts typing
  if (errorMessage.textContent) {
    errorMessage.textContent = "";
  }
});

// Preset color click events
presetColors.forEach((preset) => {
  preset.addEventListener("click", () => {
    const color = preset.getAttribute("data-color");
    colorInput.value = color;
    displayColor(color);
  });
});

// Copy to clipboard functionality
valueElements.forEach((valueElement) => {
  valueElement.addEventListener("click", () => {
    const textToCopy =
      valueElement.querySelector("span:last-child").textContent;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          showTooltip(valueElement, "Copied!");
        })
        .catch(() => {
          fallbackCopyToClipboard(textToCopy);
        });
    } else {
      fallbackCopyToClipboard(textToCopy);
    }
  });
});

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    showTooltip(document.activeElement, "Copied!");
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

function showTooltip(element, message) {
  const tooltip = document.createElement("div");
  tooltip.textContent = message;
  tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
    `;

  element.style.position = "relative";
  element.appendChild(tooltip);

  setTimeout(() => {
    if (tooltip.parentNode) {
      tooltip.parentNode.removeChild(tooltip);
    }
  }, 2000);
}

// Initialize with a default color
window.addEventListener("load", () => {
  displayColor("#667eea");
});
