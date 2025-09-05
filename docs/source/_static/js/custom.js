// JavaScript Document

/* ---------------------------------------------------------------------------------------------- */
/* description: Implementation code for the navigation bar

 * author: vegetable-syc

 * date: 2025/08/21
 */

$(window).on('load', function () {
    setNavBar();
    updateNavBarLayout();
});

$(window).resize(function () {
    updateNavBarLayout();
});

function setNavBar() {
    let navBar = document.getElementById('navContent');
    if (navBar) {
        navBar.innerHTML = navBarHtml;
        $('.dropDownContent').each(function() {
            $(this).appendTo($(this).closest('li'));
        });
    }
}

/**
 * Dynamic calculation and updating of the navigation bar width
 */
function updateNavBarLayout() {
    const navBar = $('.nav_fn');
    const mobileBreakpoint = 752;

    if (!navBar.length) return;

    /* Determine whether the current device is mobile or desktop */
    // mobile
    if ($(window).width() < mobileBreakpoint) {
        // Make the navigation bar occupy the full width
        navBar.css({
            'left': '0px',
            'width': '100%'
        });
    } 
    // desktop
    else {
        // Calculate the size of .wy-nav-content
        const targetElement = $('.wy-nav-content');
        if (targetElement.length) {
            const leftPosition = targetElement.offset().left;
            const width = targetElement.outerWidth();
            navBar.css({
                'left': leftPosition + 'px',
                'width': width + 'px'
            });
        }
    }

    // Enable automatic scaling feature
    const navItemWidth = navBar.find(">ul>li").not(".nav-side-toggle").first().width();
    if (navItemWidth > 0) {
        let fontSize = navItemWidth * 0.15;
        if (fontSize < 12) { fontSize = 12; }
        
        let subfontSize = fontSize * 0.5;
        if (subfontSize < 6) { subfontSize = 6; }

        let dropfontSize = navItemWidth * 0.1;
        if (dropfontSize < 1) { dropfontSize = 1; }

        navBar.find(".dropDownContent a").css("font-size", subfontSize + "px");

        navBar.find(">ul a").css("font-size", fontSize + "px");

        navBar.find(".has-dropdown").css("font-size", dropfontSize + "px");
    }
}

// Navigation bar HTML
let navBarHtml =
    `
  <div class="nav_fn">
    <ul>
        <li class="nav-side-toggle">
            <div class="nav-side-btn" data-toggle="wy-nav-top">
                <i class="fa fa-bars"></i>
            </div>
        </li>
        <!-- <li class="navLogo"><a href="/index.html"></a></li> -->
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/"  target="_blank" class="dropBtn">Home</a>
            </div>
        </li>
        <li>
            <div class="navDropDown has-dropdown">
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
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/support.html#" target="_blank" class="dropBtn">Support</a>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/app.html#" target="_blank" class="dropBtn">App</a>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/contact.html#" target="_blank" class="dropBtn">Contact</a>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/about.html#" target="_blank" class="dropBtn">About</a>
            </div>
        </li>
        
            <!-- <li id="txt">
                <div class="navDropDown">
                    <a href="https://freenove.com/" class="dropBtn">Welcome</a>
                </div>
            </li> -->
       
    </ul>
</div>
`;

// Footer HTML
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

// Page header HTML
let pageHeaderHtml=`
Need help? Contact <a href="mailto:support@freenove.com">support@freenove.com</a>
`;

window.onload = function () {    
    let footer_content = document.getElementById('footer_content');
    footer_content.innerHTML = footerHtml;
    $("#copy_right").text("© Copyright 2016 - " + new Date().getFullYear() + ", Freenove")

    let pageHeaderContent = document.getElementById('pageHeaderContent');
    pageHeaderContent.innerHTML = pageHeaderHtml;
};
/* ---------------------------------------------------------------------------------------------- */

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
    
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.top = '170px';
    widgetContainer.style.zIndex = '1002';  // Set the stacking level.

    widgetContainer.innerHTML = `
        <div class="minimized-icon" style="cursor: pointer;"><i class="fas fa-exclamation"></i></div>
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
                    <a href="https://freenove.com/support" target="_blank" rel="noopener noreferrer">Click to contact technical support.</a>
                </p>
                <strong style="font-size: 20px;">How to translate:</strong>
                <p style="margin-top: 5px; margin-bottom: 10px;">
                    This online document can be easily translated into multiple languages by mainstream browsers.<br>
                    Please note that sometimes the translation may not be accurate.<br>
                    Should you find it not understantable,  please refer to the original text or contact our support.<br>
                    You can find the translation button near the address bar or by right-clicking the mouse.<br>
                    <a href="https://docs.freenove.com/en/latest/about-freenove/language.html" target="_blank" rel="noopener noreferrer">Click to view the detailed tutorial.</a>
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

    const EXPANDED_WIDGET_WIDTH = 520; 
    const MINIMIZED_WIDGET_WIDTH = 60; 

    const WIDGET_DEFAULT_LEFT = 1550; 
    const WIDGET_MARGIN_RIGHT = 30;   

    function updatePosition() {
        const viewportWidth = window.innerWidth;
        const widgetWidth = widgetContainer.getBoundingClientRect().width;

        if (WIDGET_DEFAULT_LEFT + widgetWidth + WIDGET_MARGIN_RIGHT > viewportWidth) {
            widgetContainer.style.left = 'auto';
            widgetContainer.style.right = `${WIDGET_MARGIN_RIGHT}px`;
        } else {
            widgetContainer.style.left = `${WIDGET_DEFAULT_LEFT}px`;
            widgetContainer.style.right = 'auto';
        }
    }
    
    function updatePositionForToggle(isExpanding) {
        const viewportWidth = window.innerWidth;
        const futureWidgetWidth = isExpanding ? EXPANDED_WIDGET_WIDTH : MINIMIZED_WIDGET_WIDTH;

        if (WIDGET_DEFAULT_LEFT + futureWidgetWidth + WIDGET_MARGIN_RIGHT > viewportWidth) {
            widgetContainer.style.left = 'auto';
            widgetContainer.style.right = `${WIDGET_MARGIN_RIGHT}px`;
        } else {
            widgetContainer.style.left = `${WIDGET_DEFAULT_LEFT}px`;
            widgetContainer.style.right = 'auto';
        }
    }

    function expandWidget() {
        if (!isMinimized) return; 
        updatePositionForToggle(true); 
        widgetContainer.classList.remove('minimized');
        widgetContainer.classList.add('expanded');
        isMinimized = false;
    }

    function minimizeWidget() {
        if (isMinimized) return;
        updatePositionForToggle(false); 
        widgetContainer.classList.remove('expanded');
        widgetContainer.classList.add('minimized');
        isMinimized = true;
    }
    
    function toggleWidget() {
        isMinimized ? expandWidget() : minimizeWidget();
    }

    minimizedIcon.addEventListener('click', toggleWidget);
    
    document.addEventListener('click', (e) => {
        if (!widgetContainer.contains(e.target) && !isMinimized) {
            minimizeWidget();
        }
    });

    widgetContainer.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() !== 'a' && e.target.closest('a') === null) {
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

    window.addEventListener('resize', updatePosition);

    updatePosition();
});
/* ---------------------------------------------------------------------------------------------- */

/**
 * Creates and appends the page controls to the document.
 * It also sets up all necessary event listeners for interactivity.
 * @date  :  2025-07-15
 * @author:  Eason SYC
 */
function createPageContent() {

    const body = document.body;
    const rtdControls = document.createElement('div');
    rtdControls.className = 'rtd-controls';

    // A data-driven approach to define buttons. Makes adding/removing buttons clean and easy.
    const controlsData = [
        { href: "https://docs.freenove.com/en/latest/about-freenove/language.html", target: "_blank", className: "language-btn", tooltip: "GitHub" },
        { href: "https://freenove.com/support", target: "_blank", className: "support-btn", tooltip: "support" },
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
/* ---------------------------------------------------------------------------------------------- */
/**
 * To implement the image display functionality using the basiclightbox.min library.
 * @date  :  2025-09-05
 * @author:  Eason SYC
 */

// Wait for the entire webpage content to finish loading
document.addEventListener('DOMContentLoaded', function() {

  // Select all images within .product-table that have the class .product-image
  const images = document.querySelectorAll('.product-table img.product-image');

  // To traverse all the found images
  images.forEach(function(image) {

    // Add a click event listener to each image.
    image.addEventListener('click', function(event) {
      
      // Get the source URL (src) of the clicked image.
      const imageUrl = image.getAttribute('src');
      
      // Create and Display an Image Popup with basicLightbox
      basicLightbox.create(`
          <img src="${imageUrl}" style="max-width: 90vw; max-height: 90vh;">
      `).show();

    });
  });
});

// Open links in a new page
$(document).ready(function() {
  // Find all images with the class purchase-icon
  // Get their parent <a> link tags
  // Add the target="_blank" attribute to them.
  $('.purchase-icon').parent('a').attr({
    'target': '_blank',
    'rel': 'noopener noreferrer'
  });
});
