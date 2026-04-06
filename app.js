/**
 * MY Album - Global Mock JavaScript
 * Handles basic UI interactions for prototype purposes.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('MY Album App Initialized');
  
  // 1. Tab Switching Logic
  const initTabs = () => {
    const tabContainers = document.querySelectorAll('.tab-container');
    
    tabContainers.forEach(container => {
      const tabs = container.querySelectorAll('.tab-btn, .s-tab, .m-tab');
      const panes = container.parentElement.querySelectorAll('.tab-pane'); // Assume panes are siblings or in a known wrapper
      
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          // Remove active class from all tabs in this container
          tabs.forEach(t => t.classList.remove('active'));
          // Add active class to clicked tab
          tab.classList.add('active');
          
          // If there are corresponding panes, switch them
          if(panes.length > 0) {
            panes.forEach(p => p.classList.remove('active', 'block'));
            panes.forEach(p => p.classList.add('hidden'));
            
            if(panes[index]) {
               panes[index].classList.remove('hidden');
               panes[index].classList.add('active', 'block');
            }
          }
        });
      });
    });
  };

  // 2. Setup Form Toggles & Checkboxes Visual Feedback
  const initToggles = () => {
    // Just a placeholder for any complex toggle logic if needed.
    // CSS handles the visual part of input[type="checkbox"].
  };

  // 3. JPY to DMCC Calculator (Payment Page)
  const initCalculator = () => {
    const jpyInput = document.getElementById('jpy-amount');
    const dmccOutput = document.getElementById('dmcc-output');
    
    if (jpyInput && dmccOutput) {
      // Mock Rate: 1 DMCC = 15 JPY (approximate example)
      const mockRate = 15; 
      
      jpyInput.addEventListener('input', (e) => {
        const jpyVal = parseFloat(e.target.value);
        if (isNaN(jpyVal) || jpyVal <= 0) {
          dmccOutput.textContent = "0.00";
        } else {
          const dmccVal = (jpyVal / mockRate).toFixed(2);
          dmccOutput.textContent = dmccVal;
        }
      });
    }
  };

  // 4. Mock Routing (Bottom Nav & Links)
  // Maps specific buttons to HTML pages
  const initNav = () => {
    // We rely on standard <a href="file.html"> tags for navigation in the static prototype.
    // This allows back button to work naturally in browser.
    
    // Highlight Active Bottom Nav Item based on current URL
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href && currentPath.includes(href)) {
         item.classList.add('active');
      }
    });
  };


  // 6. Search Page Filtering
  const initSearchFilter = () => {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      
      // Filter Albums
      const albumItems = document.querySelectorAll('.search-album-item');
      albumItems.forEach(item => {
        const text = item.getAttribute('data-text')?.toLowerCase() || '';
        item.style.display = text.includes(query) ? 'flex' : 'none';
      });

      // Filter Creators
      const creatorItems = document.querySelectorAll('.search-creator-item');
      creatorItems.forEach(item => {
        const text = item.getAttribute('data-text')?.toLowerCase() || '';
        item.style.display = text.includes(query) ? 'flex' : 'none';
      });
    });
  };

  // 7. Global Follow Button Toggle
  const initFollowBtns = () => {
    const followBtns = document.querySelectorAll('.follow-toggle-btn');
    followBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent clicking the card underneath
        if (btn.classList.contains('btn-primary')) {
          btn.classList.replace('btn-primary', 'btn-outline');
          btn.innerText = '＋ フォロー';
        } else {
          btn.classList.replace('btn-outline', 'btn-primary');
          btn.innerText = 'フォロー中';
        }
      });
    });
  };

  // 8. Editable Title and Avatar
  const initEditableElements = () => {
    // Title
    const titleEl = document.getElementById('editable-hub-title');
    if (titleEl) {
      titleEl.addEventListener('click', () => {
        const currentText = titleEl.innerText;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.className = 'input-field';
        input.style.fontSize = '20px';
        input.style.fontWeight = '800';
        input.style.textAlign = 'center';
        input.style.width = '240px';
        input.style.padding = '4px 8px';
        input.style.margin = '0 -8px';

        const saveEdit = () => {
           if(input.parentElement) {
               titleEl.innerText = input.value.trim() || '名称未設定のHUB';
               titleEl.style.display = 'inline';
               input.remove();
           }
        };

        input.addEventListener('blur', saveEdit);
        input.addEventListener('keypress', (e) => {
           if(e.key === 'Enter') {
               saveEdit();
           }
        });

        titleEl.style.display = 'none';
        titleEl.parentNode.insertBefore(input, titleEl);
        input.focus();
      });
    }

    // Avatar
    const avatarEl = document.getElementById('editable-avatar');
    if (avatarEl) {
       avatarEl.addEventListener('click', () => {
          alert('アイコン画像のアップロード・変更画面が開きます（モックアップ）');
       });
    }
  };

  // Initialize all functions
  initTabs();
  initToggles();
  initCalculator();
  initNav();
  initSearchFilter();
  initFollowBtns();
  initEditableElements();
});
