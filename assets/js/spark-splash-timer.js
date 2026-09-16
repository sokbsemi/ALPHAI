/**
 * ==============================================================================
 * SCRIPT: SPARK SPLASH TIMER
 * SOKB SEMICONDUCTOR (SOKB PRIVATE LIMITED)
 * Campaign: SPARK™ Proximity Marketing Launch @ SEMICON India 2026
 * 
 * SCHEDULE SPECIFICATION:
 * - Start Window: 14 September 2026, 00:00:00 IST (UTC+05:30)
 * - End Window:   20 September 2026, 23:59:59 IST (UTC+05:30)
 * 
 * BEHAVIOR:
 * - Prior to 14 Sep: Splash overlay remains completely hidden/dormant.
 * - 14 Sep – 20 Sep: Splash overlay automatically displays with smooth pop-in.
 * - Post 20 Sep: Splash overlay is automatically suppressed.
 * - Override/Preview: Add `?preview=spark` or `?spark=1` to URL to test at any time.
 * 
 * INJECTION INSTRUCTIONS:
 * When ready to activate scheduled behavior, inject this script in `index.html`
 * right before the closing </body> tag:
 *   <script src="assets/js/spark-splash-timer.js"></script>
 * ==============================================================================
 */

(function () {
  'use strict';

  // 1. CONFIGURATION & TIME WINDOW DEFINITION (Indian Standard Time - UTC+05:30)
  var CONFIG = {
    // 14 September 2026, 00:00:00 IST
    startTime: new Date('2026-09-14T00:00:00+05:30').getTime(),
    // 20 September 2026, 23:59:59 IST
    endTime: new Date('2026-09-20T23:59:59+05:30').getTime(),
    // Auto-pop delay after DOM ready (ms)
    popDelay: 450,
    // Element Selectors
    overlayId: 'spark-splash-overlay',
    posterModalId: 'spark-poster-modal',
    reachoutModalId: 'spark-reachout-modal',
    reopenTriggerAttr: 'data-trigger-spark-splash'
  };

  /**
   * Evaluates if current time falls within active campaign window
   * Or if preview override parameter is present in URL
   */
  function isCampaignActive() {
    var now = Date.now();
    var params = new URLSearchParams(window.location.search);
    
    // Testing & preview bypass parameter (allows manual testing anytime)
    if (params.get('preview') === 'spark' || params.get('spark') === '1' || params.get('campaign') === 'spark') {
      return true;
    }

    return (now >= CONFIG.startTime && now <= CONFIG.endTime);
  }

  // Expose evaluation globally for inspector/audit
  window.isSparkCampaignActive = isCampaignActive;

  /**
   * Controls scheduled display and dismissal of the splash overlay
   */
  function initSparkSplashTimer() {
    var overlay = document.getElementById(CONFIG.overlayId);
    if (!overlay) return;

    function triggerOpen() {
      if (typeof window.openSparkSplash === 'function') {
        window.openSparkSplash('poster');
      } else {
        overlay.style.display = 'flex';
        overlay.classList.remove('diluting');
        requestAnimationFrame(function () {
          setTimeout(function () {
            overlay.classList.add('active');
            document.body.classList.add('overflow-hidden');
          }, 30);
        });
      }
    }

    // Check campaign timer schedule
    if (isCampaignActive()) {
      setTimeout(triggerOpen, CONFIG.popDelay);
    } else {
      // Inactive window: ensure overlay remains completely hidden
      overlay.style.display = 'none';
      overlay.classList.remove('active');
    }

    // Reopen buttons (re-opens whenever user clicks campaign badge on home page)
    var reopenBtns = document.querySelectorAll('[' + CONFIG.reopenTriggerAttr + ']');
    reopenBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        triggerOpen();
      });
    });
  }

  // Initialize upon DOM readiness
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSparkSplashTimer);
  } else {
    initSparkSplashTimer();
  }
})();
