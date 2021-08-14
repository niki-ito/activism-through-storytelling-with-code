(function() {
    // Root init function
  
    let sidebar = document.querySelector('.chapter-sidebar');
    if (sidebar) {
      initializeChapterSidebar();
    }
  })();
  

function initializeChapterSidebar() {

    function onScrollEventHandler(ev) {
      // --- Sticky Sidebar ---
  
      let sidebar = document.querySelector('.chapter-sidebar');
      let header = document.querySelector('.page-header');
      let headerBottom = header.getBoundingClientRect().bottom;
  
      if (headerBottom <= 27) {
        // Make it sticky
        console.log('now');
        addClass(sidebar, 'chapter-sidebar--sticky');
      } else {
        // Make it not stick
        removeClass(sidebar, 'chapter-sidebar--sticky');
      }
  
  
      // --- Sidebar Link Highlight ---
  
      // Reset the highlighted sidebar link(s)
      let highlightedLinks = document.querySelectorAll('.sidebar__link--highlight');
      for (let i=0; i<highlightedLinks.length; i++) {
        removeClass(highlightedLinks[i], 'sidebar__link--highlight');
      }
  
      let headings = document.querySelectorAll('.subheading__heading');
      for (let i=headings.length-1; i>=0; i--) {
        let heading = headings[i];
        let rect = heading.getBoundingClientRect();
  
        // -40 is for .subheading top padding
        if (rect.top < window.innerHeight - window.innerHeight/2 - 40) {
          // Go find the matching element in the sidebar and highlight it
          // Get the first visible one (need to subtract window height)
          let headingID = heading.getAttribute('id');
          let sidebarLinks = document.querySelectorAll('.sidebar__link');
          for (let j=0; j<sidebarLinks.length; j++) {
            let sidebarLink = sidebarLinks[j];
            let href = sidebarLink.getAttribute('href').substring(1);
            if (href === headingID) {
              // Found it
              addClass(sidebarLink, 'sidebar__link--highlight');
            }
          }
          break;
        }
      }
      if(window.addEventListener) {
        window.addEventListener('scroll', throttle(onScrollEventHandler, 15), false);
      } else if (window.attachEvent) {
        window.attachEvent('onscroll', throttle(onScrollEventHandler, 15));
      }
    }
  }

function throttle (callback, limit) {
var wait = false;
return function () {
    if (!wait) {
    callback.call();
    wait = true;
    setTimeout(function () {
        wait = false;
        }, limit);
    }
    }
}

function addClass(element, className) {
if (element.classList) {
    element.classList.add(className);
} else {
    // Don't add more than once
    if (element.className.indexOf(className) === -1) {
    element.className += ' ' + className;
    }
}
}

function removeClass(element, className) {
if (element.classList) {
    element.classList.remove(className);
} else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
}
  
  