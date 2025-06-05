// JavaScript Document
$(document).ready(function () {
    setNavBar();
    NaviResize();

});
$(window).resize(function () {
    NaviResize();
});

function NaviResize() {
    var navWidth = $('.wy-nav-side').width() + $('.wy-nav-content').outerWidth(true) + $('.wy-nav-side').offset().left;
    var navHeight = $(".extrabody-content").height();
    var navItemWidth = navWidth / 7;
    navItemWidth = navItemWidth < 60 ? 60 : navItemWidth;
    var navItemHeight = navItemWidth / 5;
    $(".nav_fn>ul>li").width(navItemWidth);
    $(".nav_fn>ul>li").height($(".extrabody-content").height);
    $(".nav_fn>ul a").css("font-size", navItemWidth * 0.15 + "px");

}

let navBarHtml =
    `
  <div class="nav_fn">
    <ul>
        <!-- <li class="navLogo"><a href="/index.html"></a></li> -->
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/"  target="_blank" class="dropBtn">Home</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="#" class="dropBtn">Store</a>
                <div class="dropDownContent">
                    <a href="https://store.freenove.com/" target="_blank">Official </a>
                    <a href="https://freenove.com/store" target="_blank">Amazon </a>
                    <a href="https://freenove.com/store" target="_blank">eBay </a>
                    <a href="https://freenove.aliexpress.com/store" target="_blank">AliExpress </a>
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/tutorial.html#" target="_blank" class="dropBtn">Tutorial</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/support.html#" target="_blank" class="dropBtn">Support</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/app.html#" target="_blank" class="dropBtn">App</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/contact.html#" target="_blank" class="dropBtn">Contact</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/about.html#" target="_blank" class="dropBtn">About</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        
            <!-- <li id="txt">
                <div class="navDropDown">
                    <a href="https://freenove.com/" class="dropBtn">Welcome</a>
                    <div class="dropDownContent">
                    </div>
                </div>
            </li> -->
       
    </ul>
</div>
`;

let footerHtml = `
<div style="border-top: 1px solid #ccc; ">
    <br/>
    <div id="copy_right" style="float: left;">
        © CopyRight 2016 - 2025
    </div>
    <div style="float: right;">
        Need help? Contact <a href="mailto:support@freenove.com">support@freenove.com</a> 
    </div>
    <br/>
</div>`;

let pageHeaderHtml=`
Need help? Contact <a href="mailto:support@freenove.com">support@freenove.com</a>
`;

function setNavBar() {
    let navBar = document.getElementById('navContent');
    navBar.innerHTML = navBarHtml;
}

function setPageLogo() {
    var link =      document.querySelector("link[rel*='icon']") ||      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = "https://cdn.jsdelivr.net/gh/Freenove/freenove-docs/docs/source/_static/images/freenove_logo_tag_icon.png";
    // link.href = "https://raw.githubusercontent.com/Freenove/freenove-docs/refs/heads/main/docs/source/_static/images/freenove_logo_tag_icon.png";
    document.getElementsByTagName("head")[0].appendChild(link);
}
function setHomeButtonPicture() {
    let home_button = document.getElementsByClassName('logo');
    // console.log(home_button);
    home_button[0].src = "https://cdn.jsdelivr.net/gh/Freenove/freenove-docs/docs/source/_static/images/freenove_logo_home_button.png";
    // home_button[0].src = "https://raw.githubusercontent.com/Freenove/freenove-docs/refs/heads/main/docs/source/_static/images/freenove_logo_home_button.png";
}
window.onload = function () {    
    // console.log('window.onload');
    // setPageLogo();
    // setHomeButtonPicture();

    let footer_content = document.getElementById('footer_content');
    footer_content.innerHTML = footerHtml;
    $("#copy_right").text("© Copyright 2016 - " + new Date().getFullYear() + ", Freenove")

    let pageHeaderContent = document.getElementById('pageHeaderContent');
    pageHeaderContent.innerHTML = pageHeaderHtml;
};

// console.log('freenove');

// Add a copy button to the code.
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('div[class^="highlight-"]').forEach(function(codeBlock) {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.title = 'Copy to clipboard';
    copyButton.innerHTML = 'Copy';
    
    codeBlock.style.position = 'relative';
    copyButton.style.position = 'absolute';
    copyButton.style.top = '5px';
    copyButton.style.right = '10px';
    copyButton.style.cursor = 'pointer';
    codeBlock.appendChild(copyButton);
    
    copyButton.style.display = 'flex';
    copyButton.style.alignItems = 'center';
    copyButton.style.justifyContent = 'center';

    copyButton.addEventListener('click', function() {
      const codeContent = codeBlock.querySelector('pre').innerText;
      navigator.clipboard.writeText(codeContent).then(() => {
        copyButton.innerHTML = '<span style="position:relative; top:-3px; padding-right: 13px">✔</span>';
        setTimeout(() => copyButton.innerHTML = 'Copy', 500);
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const fnkMap = {
        "fnk0019": { 
            title: "Freenove Super Starter Kit for Raspberry Pi", 
            url: "https://docs.freenove.com/projects/fnk0019/en/latest/",
            category: "Starter"
        },
        "fnk0020": { 
            title: "Freenove Ultimate Starter Kit for Raspberry Pi", 
            url: "https://docs.freenove.com/projects/fnk0020/en/latest/",
            category: "Starter"
        },
        "fnk0022": { 
            title: "Freenove Basic Starter Kit for Raspberry Pi", 
            url: "https://docs.freenove.com/projects/fnk0022/en/latest/",
            category: "Starter"
        },
        "fnk0023": { 
            title: "Freenove LCD1602 Starter Kit for Raspberry Pi", 
            url: "https://docs.freenove.com/projects/fnk0023/en/latest/",
            category: "Starter"
        },
        "fnk0024": { 
            title: "Freenove Ultrasonic Starter Kit for Raspberry Pi", 
            url: "https://docs.freenove.com/projects/fnk0024/en/latest/",
            category: "Starter"
        },
        "fnk0025": { 
            title: "Freenove RFID Starter Kit for Raspberry Pi", 
            url: "https://docs.freenove.com/projects/fnk0025/en/latest/",
            category: "Starter"
        },
        "fnk0066": { 
            title: "Freenove Complete Starter Kit for Raspberry Pi", 
            url: "https://docs.freenove.com/projects/fnk0066/en/latest/",
            category: "Starter"
        }
    };

    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'fnk-quick-jump';
    widgetContainer.classList.add('minimized');

    widgetContainer.innerHTML = `
        <div class="minimized-icon">🔍</div>
        
        <div class="fnk-widget">
            <div class="fnk-header">
                <div class="fnk-logo">Freenove</div>
                <div class="fnk-title">Document Quick Navigation</div>
            </div>
            
            <p class="fnk-description">Enter FNK number to quickly jump to the specified document page</p>
            
            <div class="fnk-input-group">
                <input type="text" class="fnk-input" id="fnkInput" placeholder="Enter FNK number (e.g. fnk0019)">
                <button class="fnk-button" id="fnkButton">Jump</button>
            </div>
            
            <div class="fnk-suggestions" id="fnkSuggestions"></div>
            
            <div class="fnk-error-message" id="fnkErrorMessage"></div>
            
            <div class="fnk-recent-section">
                <div class="fnk-section-title">
                    <span>📚 Recent Visits</span>
                    <span class="fnk-clear-recent" title="Clear History">🗑️</span>
                </div>
                <div class="fnk-recent-list" id="fnkRecentList"></div>
            </div>
            
            <div class="fnk-key-hint">
                <p>Tip: Press <kbd>Alt</kbd> + <kbd>K</kbd> to quick-open search.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(widgetContainer);
    
    const fnkInput = document.getElementById('fnkInput');
    const fnkButton = document.getElementById('fnkButton');
    const suggestionsContainer = document.getElementById('fnkSuggestions');
    const errorMessage = document.getElementById('fnkErrorMessage');
    const recentList = document.getElementById('fnkRecentList');
    const minimizedIcon = widgetContainer.querySelector('.minimized-icon');
    const clearRecentBtn = widgetContainer.querySelector('.fnk-clear-recent');
    
    const recentItems = JSON.parse(localStorage.getItem('fnkRecentItems')) || [];
    renderRecentItems();
    
    let isMinimized = true; 
    let interactionTimeout; 
    
    let isDragging = false;        
    let isMouseDownOnIcon = false; 
    let dragStartX, dragStartY;    
    let initialX, initialY;        
    const dragThreshold = 5;       
    
    let lastMinimizedEffectivePosition = { 
        top: 'auto', bottom: '25px', 
        left: 'auto', right: '25px',
        transform: 'none' // Added transform for consistent state management
    };

    const storedPosition = localStorage.getItem('fnkMinimizedEffectivePosition');
    if (storedPosition) {
        lastMinimizedEffectivePosition = JSON.parse(storedPosition);
    } 

    applyMinimizedPositionToDOM();

    function applyMinimizedPositionToDOM() {
        // Clear conflicting styles before applying the stored ones
        widgetContainer.style.top = lastMinimizedEffectivePosition.top;
        widgetContainer.style.bottom = lastMinimizedEffectivePosition.bottom;
        widgetContainer.style.left = lastMinimizedEffectivePosition.left;
        widgetContainer.style.right = lastMinimizedEffectivePosition.right;
        widgetContainer.style.transform = lastMinimizedEffectivePosition.transform;
    }

    function getExpandedWidgetHeight() {
        const tempWidget = widgetContainer.cloneNode(true);
        tempWidget.id = 'fnk-quick-jump-temp'; // Change ID to avoid collision
        tempWidget.classList.remove('minimized');
        tempWidget.classList.remove('expanded');
        tempWidget.style.cssText = `
            position: fixed; 
            top: 0; 
            left: -9999px;
            width: auto; 
            height: auto; 
            visibility: hidden; 
            opacity: 0;
            pointer-events: none;
        `;
        document.body.appendChild(tempWidget);
        const height = tempWidget.querySelector('.fnk-widget').offsetHeight; // Use offsetHeight for client height
        document.body.removeChild(tempWidget);
        return height;
    }

    const cachedExpandedWidgetHeight = getExpandedWidgetHeight();

    function expandWidget() {
        widgetContainer.classList.remove('minimized'); 
        isMinimized = false;

        const viewportHeight = window.innerHeight;

        const widgetActualHeight = cachedExpandedWidgetHeight; 
        
        let targetTop; 
        let targetBottom;
        let targetTransform; 

        let calculatedAbsTop = (viewportHeight / 2) - (widgetActualHeight / 2);
        
        if (calculatedAbsTop < 25) {
            targetTop = '25px';
            targetTransform = 'none'; 
            targetBottom = 'auto';
        } 
        else if ((calculatedAbsTop + widgetActualHeight) > (viewportHeight - 25)) {
            targetTop = 'auto'; 
            targetBottom = '25px'; 
            targetTransform = 'none'; 
        } 
        // else {
        //     targetTop = '50%';
        //     targetBottom = 'auto';
        //     targetTransform = 'translateY(-50%)';
        // }
        
        widgetContainer.style.top = targetTop;
        widgetContainer.style.bottom = targetBottom;
        widgetContainer.style.left = 'auto';
        widgetContainer.style.right = '20px';
        widgetContainer.style.transform = targetTransform;
        
        widgetContainer.classList.add('expanded');
        
        setTimeout(() => {
            fnkInput.focus();
        }, 100);
        resetAutoMinimizeTimer();
    }
    
    function minimizeWidget() {
        widgetContainer.classList.remove('expanded');
        isMinimized = true;

        applyMinimizedPositionToDOM(); 
        
        widgetContainer.classList.add('minimized');

        suggestionsContainer.style.display = 'none';
        errorMessage.style.display = 'none';
        fnkInput.value = '';
        resetAutoMinimizeTimer();
    }
    
    function toggleWidget() {
        if (isMinimized) {
            expandWidget();
        } else {
            minimizeWidget();
        }
    }

    function resetAutoMinimizeTimer() {
        // clearTimeout(interactionTimeout);
        // interactionTimeout = setTimeout(() => {
        //     if (!isMinimized) {
        //         minimizeWidget();
        //     }
        // }, 10000); 
    }

    function jumpToFNK() {
        const fnk = fnkInput.value.trim().toLowerCase();
        errorMessage.style.display = 'none';
        
        if (!fnk) {
            showError("Please enter the FNK number");
            return;
        }
        
        if (fnkMap[fnk]) {
            saveToRecent(fnk);
            window.location.href = fnkMap[fnk].url;
        } else {
            const match = findClosestMatch(fnk);
            if (match) {
                fnkInput.value = match;
                saveToRecent(match);
                window.location.href = fnkMap[match].url;
            } else {
                showError(`No matching documents found: ${fnk}`);
            }
        }
        
        resetAutoMinimizeTimer();
    }

    function findClosestMatch(searchTerm) {
        searchTerm = searchTerm.trim().toLowerCase();
        if (!searchTerm) return null;

        let bestMatchCode = null;
        let highestRank = -1;

        for (const code in fnkMap) {
            if (!fnkMap.hasOwnProperty(code)) continue;

            const doc = fnkMap[code];
            const codeLower = code.toLowerCase();
            const titleLower = doc.title.toLowerCase();

            let currentRank = -1; 


            if (codeLower === searchTerm) {
                currentRank = 7;
            } 

            else if (codeLower.startsWith(searchTerm)) {
                currentRank = 6;
            }

            else if (titleLower === searchTerm) {
                currentRank = 5;
            }

            else if (titleLower.startsWith(searchTerm)) {
                currentRank = 4;
            }

            else if (codeLower.includes(searchTerm)) {
                currentRank = 3;
            }

            else if (titleLower.includes(searchTerm)) {
                currentRank = 2;
            }

            else if (searchTerm.startsWith('fnk')) { 
                const searchNum = searchTerm.replace('fnk', '');
                const codeNum = codeLower.replace('fnk', '');
                if (searchNum && codeNum.startsWith(searchNum)) {
                     currentRank = 1;
                }
            } else if (searchTerm.match(/^\d+$/)) {
                const codeNum = codeLower.replace('fnk', '');
                if (codeNum.startsWith(searchTerm)) {
                    currentRank = 1;
                }
            }
            
            if (currentRank > highestRank) {
                highestRank = currentRank;
                bestMatchCode = code;
            }
        }
        return bestMatchCode; 
    }

    function showError(message, type = 'error') {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        errorMessage.style.background = type === 'error' 
            ? 'rgba(231, 76, 60, 0.12)' 
            : 'rgba(46, 204, 113, 0.12)';
        errorMessage.style.color = type === 'error' 
            ? '#e74c3c' 
            : '#27ae60';
        
        if (type !== 'error') {
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    }

    function showSuggestions() {
        const value = fnkInput.value.trim().toLowerCase();
        suggestionsContainer.innerHTML = '';
        
        if (!value) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        
        let matchedCodes = Object.keys(fnkMap).filter(key => {
            const doc = fnkMap[key];
            return key.toLowerCase().includes(value) || doc.title.toLowerCase().includes(value);
        });

        matchedCodes.sort((a, b) => {
            const aDoc = fnkMap[a];
            const bDoc = fnkMap[b];
            const aLower = a.toLowerCase();
            const bLower = b.toLowerCase();
            const aTitleLower = aDoc.title.toLowerCase();
            const bTitleLower = bDoc.title.toLowerCase();

            // Helper function to get a match rank based on value
            const getRank = (code, title, searchValue) => {
                const codeLower = code.toLowerCase();
                const titleLower = title.toLowerCase();

                if (codeLower === searchValue) return 7;
                if (codeLower.startsWith(searchValue)) return 6;
                if (titleLower === searchValue) return 5;
                if (titleLower.startsWith(searchValue)) return 4;
                if (codeLower.includes(searchValue)) return 3;
                if (titleLower.includes(searchValue)) return 2;
                
                // Numeric part of FNK code starts with
                if (searchValue.startsWith('fnk') && codeLower.startsWith('fnk')) {
                    const searchNum = searchValue.replace('fnk', '');
                    const codeNum = codeLower.replace('fnk', '');
                    if (searchNum && codeNum.startsWith(searchNum)) return 1;
                } else if (searchValue.match(/^\d+$/)) {
                    const codeNum = codeLower.replace('fnk', '');
                    if (codeNum.startsWith(searchValue)) return 1;
                }
                return 0; // No strong match
            };

            const rankA = getRank(a, aDoc.title, value);
            const rankB = getRank(b, bDoc.title, value);

            if (rankA !== rankB) {
                return rankB - rankA; // Higher rank first
            }

            // Fallback: alphabetical sort by code if ranks are equal
            return a.localeCompare(b);
        });
        
        if (matchedCodes.length > 0) {
            matchedCodes.forEach(key => {
                const doc = fnkMap[key];
                const div = document.createElement('div');
                div.className = 'fnk-suggestion-item';
                div.innerHTML = `
                    <div class="fnk-suggestion-code">${key}</div>
                    <div class="fnk-suggestion-title">${doc.title}</div>
                `;
                div.onclick = (e) => { 
                    e.stopPropagation();
                    fnkInput.value = key;
                    jumpToFNK();
                };
                suggestionsContainer.appendChild(div);
            });
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
        
        resetAutoMinimizeTimer();
    }
    
    function saveToRecent(fnkCode) {
        const doc = fnkMap[fnkCode];
        const newItem = {
            code: fnkCode,
            title: doc.title,
            timestamp: new Date().getTime()
        };
        
        const filtered = recentItems.filter(item => item.code !== fnkCode);
        filtered.unshift(newItem);
        
        if (filtered.length > 5) {
            filtered.pop();
        }
        
        localStorage.setItem('fnkRecentItems', JSON.stringify(filtered));
        
        recentItems.length = 0; // Clear and refill
        recentItems.push(...filtered);
        renderRecentItems();
    }

    function renderRecentItems() {
        recentList.innerHTML = '';
        
        if (recentItems.length === 0) {
            const emptyItem = document.createElement('div');
            emptyItem.className = 'fnk-recent-item';
            emptyItem.textContent = 'No recent visit records';
            recentList.appendChild(emptyItem);
            return;
        }
        
        const sortedItems = [...recentItems].sort((a, b) => b.timestamp - a.timestamp);
        
        sortedItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'fnk-recent-item';
            div.innerHTML = `
                <div class="fnk-recent-code">${item.code}</div>
                <div class="fnk-recent-name">${item.title}</div>
            `;
            div.onclick = (e) => { 
                e.stopPropagation();
                fnkInput.value = item.code;
                jumpToFNK();
            };
            recentList.appendChild(div);
        });
    }

    function startDrag(e) {
        if (!isMinimized) return; 
        e.preventDefault(); 

        isDragging = false;         
        isMouseDownOnIcon = true;   

        dragStartX = e.clientX || e.touches[0].clientX;
        dragStartY = e.clientY || e.touches[0].clientY;
        
        const rect = widgetContainer.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        
        widgetContainer.style.cursor = 'grabbing';
        widgetContainer.style.transition = 'none';
        widgetContainer.style.willChange = 'top, left, right, bottom';

        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchmove', doDrag, { passive: false }); 
        document.addEventListener('touchend', stopDrag);
    }
    
    function doDrag(e) {
        if (!isMouseDownOnIcon || !isMinimized) return; 

        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        if (clientX === undefined || clientY === undefined) return; 

        const deltaX = clientX - dragStartX;
        const deltaY = clientY - dragStartY;
        
        if (!isDragging && (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold)) {
            isDragging = true;
            document.body.classList.add('no-selection'); 
        }
        
        if (isDragging) { 
            e.preventDefault(); 
            
            const newX = initialX + deltaX;
            const newY = initialY + deltaY;
            
            widgetContainer.style.left = `${newX}px`;
            widgetContainer.style.top = `${newY}px`;
            widgetContainer.style.right = 'auto'; 
            widgetContainer.style.bottom = 'auto'; 
            widgetContainer.style.transform = 'none'; 
        }
    }
    
    function stopDrag() {
        if (!isMouseDownOnIcon) return; 

        document.body.classList.remove('no-selection'); 
        widgetContainer.style.willChange = 'auto'; 

        widgetContainer.style.transition = ''; 

        if (!isDragging) {
        
            toggleWidget(); 
        } else {
           
            const rect = widgetContainer.getBoundingClientRect();

            saveMinimizedPositionAndSnap(rect.top); 
        }
        
        isDragging = false;
        isMouseDownOnIcon = false;
        widgetContainer.style.cursor = 'grab'; 
        
        document.removeEventListener('mousemove', doDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', doDrag);
        document.removeEventListener('touchend', stopDrag);
    }

    function saveMinimizedPositionAndSnap(finalTop) {
        const rect = widgetContainer.getBoundingClientRect(); 
        const viewportHeight = window.innerHeight;
    
        let targetTop = 'auto';
        let targetBottom = 'auto';

        const currentCenterY = finalTop + rect.height / 2;
    
        if (currentCenterY < viewportHeight / 2) {
            targetTop = `${Math.max(25, finalTop)}px`;
            targetBottom = 'auto';
        } else {
            let calculatedBottom = viewportHeight - (finalTop + rect.height);
            targetBottom = `${Math.max(25, calculatedBottom)}px`;
            targetTop = 'auto';
        }
        
        lastMinimizedEffectivePosition = {
            top: targetTop,
            bottom: targetBottom,
            left: 'auto', // Always clear left as we stick to right
            right: '25px', // Always stick to right 25px
            transform: 'none' // Clear any translate for minimized state
        };
        localStorage.setItem('fnkMinimizedEffectivePosition', JSON.stringify(lastMinimizedEffectivePosition));

        applyMinimizedPositionToDOM(); 
    }

    minimizedIcon.addEventListener('mousedown', startDrag);
    minimizedIcon.addEventListener('touchstart', startDrag, { passive: false });
    
    clearRecentBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        localStorage.removeItem('fnkRecentItems');
        recentItems.length = 0;
        renderRecentItems();
        showError("Recent visit records have been cleared", "success");
        resetAutoMinimizeTimer();
    });
    
    document.addEventListener('click', (e) => {
        if (!widgetContainer.contains(e.target) && !isMinimized) {
            minimizeWidget();
        }
    });

    widgetContainer.addEventListener('click', (e) => {
        // Only stop propagation if it's not on interactive elements inside the widget
        if (e.target.id === 'fnkInput' || e.target.id === 'fnkButton' || 
            e.target.closest('.fnk-suggestion-item') || e.target.closest('.fnk-recent-item') ||
            e.target.closest('.fnk-clear-recent') || e.target === minimizedIcon) {
            // These elements should allow their own clicks
        } else {
            e.stopPropagation();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key === 'k') {
            e.preventDefault();
            toggleWidget();
        }
        if (e.key === 'Escape' && !isMinimized) {
            minimizeWidget();
        }
    });
    
    fnkButton.addEventListener('click', jumpToFNK);
    fnkInput.addEventListener('input', showSuggestions);
    fnkInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            jumpToFNK();
        }
    });
    
    resetAutoMinimizeTimer();
});

const style = document.createElement('style');
style.textContent = `
    body.no-selection {
        user-select: none !important;
        -webkit-user-select: none !important;
        cursor: grabbing !important; 
    }
    body.no-selection * {
        -webkit-user-drag: none !important;
        user-drag: none !important;
        pointer-events: none !important; 
    }
    body.no-selection #fnk-quick-jump.minimized .minimized-icon {
        pointer-events: auto !important; 
        cursor: grabbing !important;
    }
`;
document.head.appendChild(style);