document.addEventListener("DOMContentLoaded", () => {
  const keyboardWrapper = document.getElementById("keyboard-wrapper");
  if (!keyboardWrapper) return;

  const keyboardConfig = [
    // Row 0
    [
      {
        label: "Esc",
        width: 1,
        type: "image",
        color: "#F38020",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
      },
      {
        label: "1",
        width: 1,
        type: "html",
        color: "#FFFFFF",
        content: `
            <i class="devicon-ssh-original"></i>
          `,
      },
      {
        label: "2",
        width: 1,
        type: "image",
        color: "#000020",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
      },
      {
        label: "3",
        width: 1,
        type: "image",
        color: "#FFA116",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg",
      },
      {
        label: "4",
        width: 1,
        type: "svg",
        color: "#88CE02",
        content:
          '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#6D78AD" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-7l-10 5-10-5v7z"/></svg>',
      }, // Makefile
      {
        label: "5",
        width: 1,
        type: "svg",
        color: "#F7DF1E",
        content:
          `<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"/><path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"/><path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"/><path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"/>
</svg>`,
      },
      {
        label: "6",
        width: 1,
        type: "image",
        color: "#3776AB",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        label: "7",
        width: 1,
        type: "image",
        color: "#007396",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        label: "8",
        width: 1,
        type: "image",
        color: "#DC382D",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      },
      {
        label: "9",
        width: 1,
        type: "image",
        color: "#2496ED",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        label: "0",
        width: 1,
        type: "image",
        color: "#FF6C37",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      },
      {
        label: "-",
        width: 1,
        type: "image",
        color: "#DEA584",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
      },
      {
        label: "=",
        width: 1,
        type: "image",
        color: "#00ADD8",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
      },
      {
        label: "Bksp",
        width: 2,
        type: "text",
        color: "#ffffff",
        content: "Bksp",
      },
    ],
    // Row 1
    [
      {
        label: "Tab",
        width: 1.5,
        type: "text",
        color: "#ffffff",
        content: "Tab",
      },
      {
        label: "Q",
        width: 1,
        type: "svg",
        color: "#ffffff",
        content:
          '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#00D28A" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zm0 13.5l-4-1.75 4-9.75 4 9.75-4 1.75z"/></svg>',
      }, // LangChain
      {
        label: "W",
        width: 1,
        type: "image",
        color: "#000000",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      },
      {
        label: "E",
        width: 1,
        type: "image",
        color: "#000000",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        label: "R",
        width: 1,
        type: "image",
        color: "#61DAFB",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        label: "T",
        width: 1,
        type: "image",
        color: "#000000",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
      },
      {
        label: "Y",
        width: 1,
        type: "image",
        color: "#000000",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
      },
      {
        label: "U",
        width: 1,
        type: "html",
        color: "#E95420",
        content: `
            <i class="devicon-ubuntu-plain colored"></i>
          `,
      },
      {
        label: "I",
        width: 1,
        type: "image",
        color: "#CC0000",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
      },
      {
        label: "O",
        width: 1,
        type: "svg",
        color: "#ffffff",
        content:
          '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#74AA9C" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-13c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/></svg>',
      }, // OpenAI
      {
        label: "P",
        width: 1,
        type: "image",
        color: "#336791",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        label: "[",
        width: 1,
        type: "image",
        color: "#3178C6",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        label: "]",
        width: 1,
        type: "svg",
        color: "#FF4154",
        content:
          '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#FF4154" d="M12 21l-9-9 9-9 9 9-9 9z"/></svg>',
      }, // TanStack
      {
        label: "\\",
        width: 1.5,
        type: "image",
        color: "#007ACC",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
    ],
    // Row 2
    [
      {
        label: "Caps",
        width: 1.75,
        type: "text",
        color: "#ffffff",
        content: "Caps",
      },
      {
        label: "A",
        width: 1,
        type: "image",
        color: "#232F3E",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        label: "S",
        width: 1,
        type: "image",
        color: "#FF3E00",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
      },
      {
        label: "D",
        width: 1,
        type: "image",
        color: "#00ADD8",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
      },
      {
        label: "F",
        width: 1,
        type: "image",
        color: "#009688",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      },
      {
        label: "G",
        width: 1,
        type: "image",
        color: "#F05032",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        label: "H",
        width: 1,
        type: "svg",
        color: "#00a8f4",
        content:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M58.425 0C53.55 8.079 46.337 17.91 41.72 24.283c-2.02 2.785-3.767 5.195-5.056 7.08a844 844 0 0 1-2.798 4.038c-5.268 7.576-10.722 15.41-14.436 23.816c-3.612 8.169-5.195 16.517-4.7 24.809c.474 8.038 2.978 15.777 7.232 22.388c4.205 6.533 10.12 11.95 17.103 15.663c7.216 3.833 15.315 5.829 24.081 5.923h1.711c8.766-.094 16.865-2.086 24.081-5.923c6.983-3.714 12.894-9.13 17.103-15.663c4.255-6.61 6.758-14.35 7.232-22.388c.491-8.292-1.092-16.64-4.7-24.81h-.024c-3.718-8.41-9.17-16.243-14.435-23.815a679 679 0 0 1-2.798-4.037c-1.289-1.882-3.036-4.292-5.057-7.081C81.64 17.905 74.428 8.075 69.552 0v20.217c5.023 7.207 9.9 13.699 12.505 17.5c5.703 8.315 12.31 17.18 16.228 26.04c11.773 26.642-4.786 52.708-33.563 53.019h-1.465c-28.778-.311-45.34-26.377-33.564-53.019c3.92-8.864 10.521-17.725 16.228-26.04c2.601-3.797 7.477-10.293 12.505-17.5z"/></svg>',
      }, // Hyprland
      {
        label: "J",
        width: 1,
        type: "svg",
        color: "#F7DF1E",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="20" height="20" />',
      },
      {
        label: "K",
        width: 1,
        type: "svg",
        color: "#326CE5",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" width="20" height="20" />',
      },
      {
        label: "L",
        width: 1,
        type: "svg",
        color: "#FCC624",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" width="20" height="20" />',
      },
      {
        label: ";",
        width: 1,
        type: "svg",
        color: "#008CC1",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg" width="20" height="20" />',
      },
      {
        label: "'",
        width: 1,
        type: "svg",
        color: "#003B57",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" width="20" height="20" />',
      },
      {
        label: "Enter",
        width: 2.25,
        type: "text",
        color: "#ffffff",
        content: "Enter",
      },
    ],
    // Row 3
    [
      {
        label: "Shift",
        width: 2.25,
        type: "text",
        color: "#ffffff",
        content: "Shift",
      },
      {
        label: "Z",
        width: 1,
        type: "svg",
        color: "#F7A41D",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zig/zig-original.svg" width="20" height="20" />',
      },
      {
        label: "X",
        width: 1,
        type: "svg",
        color: "#88CE02",
        content:
          `
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
          `,
      }, // GSAP
      {
        label: "C",
        width: 1,
        type: "svg",
        color: "#00599C",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width="20" height="20" />',
      },
      {
        label: "V",
        width: 1,
        type: "svg",
        color: "#019733",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" width="20" height="20" />',
      },
      {
        label: "B",
        width: 1,
        type: "svg",
        color: "#4EAA25",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" width="20" height="20" />',
      },
      {
        label: "N",
        width: 1,
        type: "svg",
        color: "#000000",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width="20" height="20" />',
      },
      {
        label: "M",
        width: 1,
        type: "svg",
        color: "#00ADD8",
        content:
          '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="20" height="20" />',
      },
      {
        label: ",",
        width: 1,
        type: "image",
        color: "#150458",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      },
      {
        label: ".",
        width: 1,
        type: "image",
        color: "#013243",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      },
      {
        label: "/",
        width: 1,
        type: "image",
        color: "#EE4C2C",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      },
      {
        label: "Shift",
        width: 2.75,
        type: "text",
        color: "#ffffff",
        content: "Shift",
      },
    ],
    // Row 4
    [
      {
        label: "Ctrl",
        width: 1.25,
        type: "text",
        color: "#ffffff",
        content: "Ctrl",
      },
      {
        label: "Win",
        width: 1.25,
        type: "image",
        color: "#FCC624",
        content: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
      },
      {
        label: "Space",
        width: 7.5,
        type: "text",
        color: "#ffffff",
        content: "Space",
      },
      {
        label: "Alt",
        width: 1.25,
        type: "text",
        color: "#ffffff",
        content: "Alt",
      },
      {
        label: "Fn",
        width: 1.25,
        type: "text",
        color: "#ffffff",
        content: "Fn",
      },
      {
        label: "Ctrl",
        width: 1.25,
        type: "text",
        color: "#ffffff",
        content: "Ctrl",
      },
    ],
  ];
  let keyboardRowsHtml = "";

  keyboardConfig.forEach((row, rowIdx) => {
    let rowHtml = `<div class="keyboard-row">`;
    row.forEach((keyConfig, keyIdx) => {
      let keyContent = `<span class="key-text">${keyConfig.content}</span>`;

      if (keyConfig.type === "svg" || keyConfig.type === "html") {
        let contentStripped = keyConfig.content.replace(/width=["'][^"']+["']/i, '').replace(/height=["'][^"']+["']/i, '');
        keyContent = contentStripped;
      } else if (keyConfig.type === "image") {
        keyContent = `<img src="${keyConfig.content}" alt="${keyConfig.label}"  />`;
      }

      // Try to determine technology name from image URL or label
      let techName = "";
      if (keyConfig.type !== "text") {
        const match = keyConfig.content.match(/devicon@latest\/icons\/([a-zA-Z0-9]+)\//);
        if (match) {
          techName = match[1];
        } else {
          const lbl = keyConfig.label;
          if (lbl === "1") techName = "ssh";
          if (lbl === "4") techName = "makefile";
          if (lbl === "Q") techName = "langchain";
          if (lbl === "O") techName = "openai";
          if (lbl === "]") techName = "tanstack";
          if (lbl === "H") techName = "hyprland";
          if (lbl === "5") techName = "gsap";
          if (lbl === "Win") techName = "arch";
          if (lbl === "\\") techName = "vscode";
          if (lbl === "U") techName = "ubuntu";
        }
      }
      
      const techMappings = {
        "amazonwebservices": "AWS",
        "cplusplus": "C++",
        "javascript": "JavaScript",
        "typescript": "TypeScript",
        "nextjs": "Next.js",
        "nodejs": "Node.js",
        "vuejs": "Vue",
        "threejs": "Three.js",
        "postgresql": "PostgreSQL",
        "archlinux": "Arch",
        "vscode": "VS Code"
      };
      
      if (techName) {
        techName = techMappings[techName.toLowerCase()] || techName.charAt(0).toUpperCase() + techName.slice(1);
      }

      const width = keyConfig.width;
      const delay = rowIdx * 0.3 + keyIdx * 0.02;
      const hoverColor = keyConfig.color || "#ffffff";

      rowHtml += `
        <div id="key-${keyConfig.label.toUpperCase()}" class="key-container" style="--key-width: ${width * 7}rem; --anim-delay: ${delay}s; --hover-color: ${hoverColor};" data-label="${keyConfig.label}">
          <div class="key-shadow-base"></div>
          <div class="key-body">
            <div class="key-top-highlight"></div>
            <div class="key-content">
              ${keyContent}
              ${techName ? `<span class="tech-name">${techName}</span>` : ''}
            </div>
            <div class="key-side-highlight"></div>
            <div class="key-hover-glow"></div>
            <div class="key-bottom-glow"></div>
          </div>
        </div>
      `;
    });
    rowHtml += `</div>`;
    keyboardRowsHtml += rowHtml;
  });

  const keyboardInnerHtml = `
    <div class="keyboard-body">
      <div class="keyboard-inner">
        <div class="edge-highlight-top" ></div>
        <div class="edge-shadow-bottom" ></div>
        <div class="keyboard-rows" >
          ${keyboardRowsHtml}
        </div>
        
      </div>
    </div>
  `;

  // Append inside wrapper (preserving any existing glows/shadows)
  keyboardWrapper.insertAdjacentHTML("beforeend", keyboardInnerHtml);

  // Add hover event listener for all keys
  const keys = keyboardWrapper.querySelectorAll(".key-container");

  // Load a reliable mechanical keystroke sound
  const clickSoundUrl = "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3";
  const baseAudio = new Audio(clickSoundUrl);
  baseAudio.preload = "auto";

  // Mechanical keyboard click sound
  const playClickSound = () => {
    // Clone the node to allow overlapping sounds when typing rapidly
    const audioClone = baseAudio.cloneNode();
    audioClone.volume = 1; // adjust volume
    audioClone.play().catch((e) => console.log("Audio disabled by browser auto-play policy: ", e));
  };

  keys.forEach((key) => {
    key.addEventListener("mouseenter", () => {
      console.log(`Hovering over: ${key.dataset.label}`);
    });
    
    // Play sound on click/press down
    key.addEventListener("mousedown", () => {
      playClickSound();
    });
  });

  const initKeyboardListener = () => {
    const handlePhysicalKeyDown = (event) => {
        // 1. VISIBILITY CHECK: Only work if the keyboard section is in the viewport
        if (!keyboardWrapper) return;
        const rect = keyboardWrapper.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isVisible) return;

        // 2. LOW PRIORITY FILTERING
        // Skip if user is holding Ctrl, Alt, or Cmd (System Shortcuts)
        if (event.ctrlKey || event.altKey || event.metaKey) return;

        // Skip if user is focused on an input or textarea
        const activeTag = document.activeElement?.tagName;
        if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

        // 3. NORMALIZE KEY
        const pressedKey = event.key.toUpperCase();

        // 4. LOOKUP IN YOUR CONFIG
        // Assuming keyboardConfig is available in global scope
        const flatConfig = keyboardConfig.flat();
        const targetKey = flatConfig.find(k => k.label.toUpperCase() === pressedKey);

        if (targetKey) {
            // OPTIONAL: Prevent default for specific keys like Space or Tab
            // only if they are actually mapped in your config
            if ([' ', 'TAB'].includes(pressedKey)) {
                event.preventDefault();
            }

            // TRIGGER SOUND (Using your existing sound logic)
            playClickSound();

            // VISUAL FEEDBACK
            const element = document.getElementById(`key-${pressedKey}`);
            if (element) {
                element.classList.add('active-press');
                setTimeout(() => element.classList.remove('active-press'), 100);
            }
        }
    };

    // Attach to window
    window.addEventListener('keydown', handlePhysicalKeyDown);

    // Return a cleanup function for when you leave the "screen"
    return () => {
        window.removeEventListener('keydown', handlePhysicalKeyDown);
    };
  };

  // Usage:
  const cleanup = initKeyboardListener();
  // When switching screens: cleanup();
});
