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

/* ---------------------------------------------------------------------------------------------- */
/* description: About The One-Click Copy Button

 * author: vegetable-syc

 * date: 2025/05/30
 */

// Add a copy button to the code.
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('div[class^="highlight-"]').forEach(function(codeBlock) {

    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(faLink);

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.title = 'Copy to clipboard';
    copyButton.innerHTML = '<i style="position:relative; top:3px;" class="far fa-copy copy-icon"></i>';
    
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
      // Clone the entire pre node to avoid modifying the original DOM
      const originalPre = codeBlock.querySelector('pre');
      const tempPre = originalPre.cloneNode(true); // Deep clone
      
      // Remove line number elements (common class names)
      const lineNumbers = tempPre.querySelectorAll('.linenos, .lineno, .ln');
      lineNumbers.forEach(el => el.remove());
      
      // Get processed text
      const codeContent = tempPre.innerText;
      
      navigator.clipboard.writeText(codeContent).then(() => {
        copyButton.innerHTML =  '<i style="position:relative; top:3px;" class="fas fa-check"></i>';
        setTimeout(() => copyButton.innerHTML = '<i style="position:relative; top:3px;" class="far fa-copy copy-icon"></i>', 500);
      });
    });
  });
});
/* ---------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------- */
/* description: About the four circular controls

 * author: vegetable-syc
 */

/**
 * Adds Font Awesome CSS library to the document head
 * Uses CDN for fast loading
 */
function addFontAwesome() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
}

/* description: About Online Document Navigation

 * author: vegetable-syc

 * date: 2025/06/05
 */

document.addEventListener('DOMContentLoaded', function() {
    addFontAwesome(); 
    
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'fnk-quick-jump';
    widgetContainer.classList.add('minimized');

    widgetContainer.innerHTML = `
        <div class="minimized-icon"><i class="fas fa-exclamation"></i></div>
        
        <div class="fnk-widget">
            <div class="fnk-header">
                <img src="https://cdn.jsdelivr.net/gh/Freenove/freenove-docs/docs/source/_static/images/freenove_logo_tag_icon.png" class="fnk-logo">
                <div class="fnk-title">Announcement</div>
            </div>
            
            <div class="fnk-announcement-content" style="padding: 0 15px 5px; font-size: 13px; line-height: 1.6;">
                <strong style="font-size: 20px;">Important note:</strong>
                <p style="margin-top: 5px; margin-bottom: 15px;">
                    This online document has just been launched and is currently being improved.<br>
                    If you find any mistake, please verify against the downloaded version. Your feedback is welcome.<br>
                    <a href="https://freenove.com/support" target="_blank" rel="noopener noreferrer">Click to view the detailed tutorial.</a>
                </p>

                <strong style="font-size: 20px;">How to translate:</strong>
                <p style="margin-top: 5px; margin-bottom: 10px;">
                    This online document can be easily translated into multiple languages by mainstream browsers.<br>
                    Please note that sometimes the translation may not be accurate.<br>
                    Should you find it not understantable,  please refer to the original text or contact our support.<br>
                    You can find the translation button near the address bar or by right-clicking the mouse.<br>
                    <a href="https://docs.freenove.com/en/latest/about-freenove/language.html" target="_blank" rel="noopener noreferrer">Click to contact technical support.</a>
                </p>
            </div>
            
            <div class="fnk-key-hint">
                <p>Tip: Press <kbd>Alt</kbd> + <kbd>K</kbd> to show/hide this panel.</p>
            </div>
        </div>
    `;

    document.body.appendChild(widgetContainer);

    const minimizedIcon = widgetContainer.querySelector('.minimized-icon');

    let isMinimized = true;

    let isDragging = false;
    let isMouseDownOnIcon = false;
    let dragStartX, dragStartY;
    let initialX, initialY;
    const dragThreshold = 5;

    let lastMinimizedEffectivePosition = { 
        top: 'auto', bottom: '25px', 
        left: 'auto', right: '25px',
        transform: 'none'
    };

    const storedPosition = localStorage.getItem('fnkMinimizedEffectivePosition');
    if (storedPosition) {
        lastMinimizedEffectivePosition = JSON.parse(storedPosition);
    } 

    applyMinimizedPositionToDOM();
    function applyMinimizedPositionToDOM() {
        widgetContainer.style.top = lastMinimizedEffectivePosition.top;
        widgetContainer.style.bottom = lastMinimizedEffectivePosition.bottom;
        widgetContainer.style.left = lastMinimizedEffectivePosition.left;
        widgetContainer.style.right = lastMinimizedEffectivePosition.right;
        widgetContainer.style.transform = lastMinimizedEffectivePosition.transform;
    }

    function getExpandedWidgetHeight() {
        const tempWidget = widgetContainer.cloneNode(true);
        tempWidget.id = 'fnk-quick-jump-temp';
        tempWidget.classList.remove('minimized');
        tempWidget.classList.remove('expanded');
        tempWidget.style.cssText = `position: fixed; top: 0; left: -9999px; width: auto; height: auto; visibility: hidden; opacity: 0; pointer-events: none;`;
        document.body.appendChild(tempWidget);
        const height = tempWidget.querySelector('.fnk-widget').offsetHeight;
        document.body.removeChild(tempWidget);
        return height;
    }

    const cachedExpandedWidgetHeight = getExpandedWidgetHeight();

    function expandWidget() {
        widgetContainer.classList.remove('minimized');
        isMinimized = false;

        const rect = widgetContainer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const widgetActualHeight = cachedExpandedWidgetHeight;

        let targetTop = 'auto';
        let targetBottom = 'auto';

        if (rect.top + rect.height < viewportHeight / 2) {
            targetTop = `${rect.top}px`;

            if (rect.top + widgetActualHeight > viewportHeight - 25) {
                targetTop = 'auto';
                targetBottom = '25px';
            }
        } else {
            targetBottom = `${viewportHeight - rect.bottom}px`;

            if (rect.bottom - widgetActualHeight < 25) {
                targetBottom = 'auto';
                targetTop = '25px';
            }
        }


        widgetContainer.style.top = targetTop;
        widgetContainer.style.bottom = targetBottom;
        widgetContainer.style.left = 'auto';
        widgetContainer.style.right = '20px'; 
        widgetContainer.style.transform = 'none'; 

        widgetContainer.classList.add('expanded');
    }

    function minimizeWidget() {
        widgetContainer.classList.remove('expanded');
        isMinimized = true;
        applyMinimizedPositionToDOM(); 
        widgetContainer.classList.add('minimized');
    }

    function toggleWidget() {
        if (isMinimized) {
            expandWidget();
        } else {
            minimizeWidget();
        }
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
        
        let targetTop = 'auto', targetBottom = 'auto';
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
            left: 'auto',
            right: '25px',
            transform: 'none'
        };

        localStorage.setItem('fnkMinimizedEffectivePosition', JSON.stringify(lastMinimizedEffectivePosition));
        applyMinimizedPositionToDOM(); 
    }

    minimizedIcon.addEventListener('mousedown', startDrag);
    minimizedIcon.addEventListener('touchstart', startDrag, { passive: false });
    
    document.addEventListener('click', (e) => {
        if (!widgetContainer.contains(e.target) && !isMinimized) {
            minimizeWidget();
        }
    });

    widgetContainer.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() !== 'a') {
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
/* ---------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------- */
/**
 * @fileoverview This script dynamically creates page control buttons and a download modal.
 * It intelligently determines the correct download links based on the current page's URL structure.
 */

/**
 * Parses the current window URL to determine the project name, language, version,
 * and constructs the appropriate download links for both EPUB and HTML formats.
 *
 * @returns {object} A configuration object containing project details and download URLs.
 * @property {string} project - The identified project name (e.g., 'fnk0020').
 * @property {string} language - The identified language code (e.g., 'en').
 * @property {string} version - The identified version (e.g., 'latest').
 * @property {string} htmlDownloadUrl - The fully constructed URL for the HTML zip download.
 * @property {string} epubDownloadUrl - The fully constructed URL for the EPUB download.
 */
function getProjectConfigFromUrl() {
    const hostname = window.location.hostname;
    const pathParts = window.location.pathname.split('/').filter(part => part !== '');

    // --- Initialize with safe default values ---
    let project = 'unknown-project';
    let language = 'en';
    let version = 'latest';
    let htmlDownloadUrl = '#'; // Fallback to a non-functional link
    let epubDownloadUrl = '#'; // Fallback for the EPUB link

    // --- Logic to differentiate between hosting environments and build URLs ---

    // Case 1: "Path-based" structure (e.g., https://docs.freenove.com/projects/fnk0019/en/latest/)
    if (pathParts.length >= 3 && pathParts[0] === 'projects') {
        
        project = pathParts[1];
        language = pathParts[2];
        version = pathParts[3] || 'latest';
        
        // In this structure, the download URL requires the project name.
        htmlDownloadUrl = `/_/downloads/${project}/${language}/${version}/htmlzip/`;
        epubDownloadUrl = `/_/downloads/${project}/${language}/${version}/epub/`;

    }
    else if (hostname.includes('docs.freenove.com')) {
        
        language = pathParts[0] || 'en';
        version = pathParts[1] || 'latest';

        htmlDownloadUrl = `/_/downloads/${language}/${version}/htmlzip/`;
        epubDownloadUrl = `/_/downloads/${language}/${version}/epub/`;

    }
    // Case 2: "Subdomain-based" structure (e.g., https://freenove-sphinx-rst.readthedocs.io/en/latest/)
    else if (hostname.includes('.readthedocs.io')) {
        
        language = pathParts[0] || 'en';
        version = pathParts[1] || 'latest';
        
        // In this structure, the project name is NOT included in the download URL path.
        htmlDownloadUrl = `/_/downloads/${language}/${version}/htmlzip/`;
        epubDownloadUrl = `/_/downloads/${language}/${version}/epub/`;
        
    }
    // Case 3: Fallback for unrecognized URL structures.
    else {
        console.warn("Could not recognize URL structure. Download links might be incorrect.");
    }
    
    // Package and return the final configuration.
    const config = { project, language, version, htmlDownloadUrl, epubDownloadUrl };
    return config;
}

/**
 * Creates and appends the page controls and the hidden download modal to the document.
 * It also sets up all necessary event listeners for interactivity.
 */
function createPageContent() {

    const body = document.body;
    const rtdControls = document.createElement('div');
    rtdControls.className = 'rtd-controls';

    // A data-driven approach to define buttons. Makes adding/removing buttons clean and easy.
    const controlsData = [
        { href: "https://docs.freenove.com/en/latest/about-freenove/language.html", target: "_blank", className: "language-btn", tooltip: "GitHub" },
        { href: "https://freenove.com/support", target: "_blank", className: "support", icon: "fas fa-envelope", tooltip: "support" },
        { href: "https://freenove.com/", target: "_blank", className: "website-btn", tooltip: "Freenove Official Website" },
        { href: "https://www.youtube.com/@Freenove", target: "_blank", className: "youtube", icon: "fab fa-youtube", tooltip: "YouTube" },
    ];

    // Loop through the data to build each button.
    controlsData.forEach(data => {
        const link = document.createElement('a');
        link.href = data.href;
        
        if (data.target) link.target = data.target;
        if (data.id) link.id = data.id;
        
        link.className = `control-btn ${data.className}`;

        if (data.icon) {
            const icon = document.createElement('i');
            icon.className = data.icon;
            link.appendChild(icon);
        }

        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = data.tooltip;
        link.appendChild(tooltip);

        rtdControls.appendChild(link);
    });

    body.appendChild(rtdControls);
}

// Wait until the basic HTML document structure is ready before running the script.
document.addEventListener('DOMContentLoaded', () => {
    // Use a try...catch block as a safety net for any unexpected runtime errors.
    try {
        createPageContent();
    } catch (error) {
        console.error("A critical error occurred while initializing page controls:", error);
    }
});